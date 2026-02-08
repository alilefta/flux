// /data/profile.ts
import { currentUser } from "@clerk/nextjs/server";
import prisma from "@/lib/prisma";

/**
 * Get current profile (assumes user is authenticated)
 * Throws if profile not found
 */
export async function getCurrentProfile() {
	const user = await currentUser();

	if (!user) {
		throw new Error("Unauthorized");
	}

	const profile = await getProfileByClerkId(user.id);

	if (!profile) {
		// Fallback: Create profile if webhook missed
		return await prisma.profile.create({
			data: {
				clerkId: user.id,
				name: `${user.firstName || ""} ${user.lastName || ""}`.trim() || "User",
				imageUrl: user.imageUrl || "",
				email: user.emailAddresses[0].emailAddress,
			},
		});
	}

	return profile;
}

// /**
//  * Get profile by Clerk user ID
//  */
export async function getProfileByClerkId(clerkId: string) {
	return await prisma.profile.findUnique({
		where: { clerkId },
	});
}
