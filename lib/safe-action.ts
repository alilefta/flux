import { currentProfile } from "@/data/current-profile";
import { createSafeActionClient } from "next-safe-action";

export const actionClient = createSafeActionClient({
	handleServerError(e) {
		console.error("Action error:", e.message);
		return "System Malfunction. Retrying connection...";
	},
});

export const actionClientWithProfile = createSafeActionClient().use(async ({ next }) => {
	const profile = await currentProfile();

	if (!profile) {
		throw new Error("Unauthorized");
	}

	return next({
		ctx: {
			profile,
		},
	});
});
