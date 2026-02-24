"use server";

import { actionClientWithProfile } from "@/lib/safe-action";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { UpdateProfileSchema } from "@/schemas/profile";
import { ERRORS } from "@/lib/errors";
import { GetProfileDetailsSchema } from "@/schemas/composed/profile.details";

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

			revalidatePath("/");
			return { success: true, profile: updatedProfile };
		} catch (error) {
			console.error("[UPDATE_PROFILE] action error", error);
			throw ERRORS.INTERNAL_SERVER_ERROR;
		}
	});
