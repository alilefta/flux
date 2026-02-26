"use server";

import { actionClientWithProfile } from "@/lib/safe-action";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { UpdateProfileSchema } from "@/schemas/profile";
import { ERRORS } from "@/lib/errors";
import { GetProfileDetailsSchema } from "@/schemas/composed/profile.details";
import { clerkClient } from "@clerk/nextjs/server";

export const getProfileDetailsAction = actionClientWithProfile
	.metadata({ actionName: "get-profile-details" })
	.inputSchema(GetProfileDetailsSchema)
	.action(async ({ parsedInput }) => {
		const { profileId, serverId } = parsedInput;

		// 1. Basic Profile Info (Global)
		const profile = await prisma.profile.findUnique({
			where: { id: profileId },
		});

		if (!profile) throw new Error("Profile not found");

		let memberDetails = null;

		// 2. If inside a server, get Member specific info
		if (serverId) {
			memberDetails = await prisma.member.findUnique({
				where: {
					profileId_serverId: {
						profileId,
						serverId,
					},
				},
			});
		}

		return {
			success: true,
			data: {
				...profile,
				member: memberDetails, // Will be null for DMs
			},
		};
	});

export const updateProfileAction = actionClientWithProfile
	.metadata({ actionName: "update-profile" })
	.inputSchema(UpdateProfileSchema)
	.action(async ({ parsedInput, ctx: { profile } }) => {
		const { name, imageUrl } = parsedInput;

		try {
			const updatedProfile = await prisma.profile.update({
				where: {
					id: profile.id, // Only update self
				},
				data: {
					name,
					imageUrl,
				},
			});

			// 2. Sync to CLERK (Slow & Secondary)
			// We wrap this in a separate try/catch so it doesn't block the UI if it fails
			try {
				const client = await clerkClient();
				if (name) {
					// Update Name
					// Note: Clerk splits name into First/Last. We'll do a simple split or just map to firstName.
					const [firstName, ...lastNameParts] = name.split(" ");
					const lastName = lastNameParts.join(" ");

					await client.users.updateUser(profile.clerkId, {
						firstName: firstName,
						lastName: lastName || undefined,
						// Update Image
						// Clerk allows passing a public URL to set the avatar
						publicMetadata: {
							// We can also store custom data here if needed
						},
					});
				}

				// B. Sync Image (Heavy Operation)
				// Only run this if the image URL actually changed to save bandwidth
				if (imageUrl && imageUrl !== profile.imageUrl) {
					console.log("🔄 Syncing image to Clerk...");

					const response = await fetch(imageUrl);
					if (!response.ok) throw new Error("Failed to download image from UploadThing");

					const blob = await response.blob();

					// Explicitly create a File object (Node 20+) to ensure MIME type is preserved
					// Clerk SDK handles Blobs, but a File is safer for content-type detection
					const file = new File([blob], "profile-image", { type: blob.type });

					await client.users.updateUserProfileImage(profile.clerkId, {
						file: file,
					});

					console.log("✅ Clerk image synced");
				}
			} catch (error) {
				// Log the error but DO NOT throw it.
				// The user's profile IS updated in your app, which is what matters.
				console.error("⚠️ Background Sync with Clerk failed:", error);
			}

			revalidatePath("/");
			return { success: true, profile: updatedProfile };
		} catch (error) {
			console.error("[UPDATE_PROFILE] action error", error);
			throw ERRORS.INTERNAL_SERVER_ERROR;
		}
	});
