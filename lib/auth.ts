// /lib/auth.ts
import { getCurrentProfile } from "@/data/profile";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { cache } from "react";

/**
 * Get current user ID (does NOT fetch profile)
 * Use this for quick auth checks
 */
export async function requireAuth() {
	const { userId } = await auth();

	if (!userId) {
		redirect("/sign-in");
	}

	return userId;
}

/**
 * Check if user is authenticated (returns boolean)
 * Use this for conditional rendering
 */
export async function isAuthenticated() {
	const { userId } = await auth();
	return !!userId;
}

/**
 * Cached auth check (per request)
 */
export const getAuth = cache(async () => {
	return await auth();
});

/**
 * Cached profile fetch (per request)
 */
export const getCachedProfile = cache(async () => {
	return await getCurrentProfile();
});
