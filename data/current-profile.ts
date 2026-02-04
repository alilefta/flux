import { currentUser } from "@clerk/nextjs/server";
import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";

export async function currentProfile() {
	const user = await currentUser();

	if (!user) {
		return redirect("/sign-in");
	}

	// Check if profile exists
	const profile = await prisma.profile.findUnique({
		where: {
			clerkId: user.id,
		},
	});

	// If profile exists, return it
	if (profile) {
		return profile;
	}

	// 🔴 FALLBACK: If webhook didn't fire (rare), create profile now
	const newProfile = await prisma.profile.create({
		data: {
			clerkId: user.id,
			name: `${user.firstName || ""} ${user.lastName || ""}`.trim() || "User",
			imageUrl: user.imageUrl || "",
			email: user.emailAddresses[0].emailAddress,
		},
	});

	return newProfile;
}
