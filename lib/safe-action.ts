import { currentProfile } from "@/data/current-profile";
import { Prisma } from "@/generated/prisma/client";
import { createMiddleware, createSafeActionClient, DEFAULT_SERVER_ERROR_MESSAGE } from "next-safe-action";
import z from "zod";
import { DATABASE_ERROR_MESSAGE } from "./safe-action-helpers";

export class ActionError extends Error {}

// base action
export const actionClient = createSafeActionClient({
	defineMetadataSchema() {
		return z.object({
			actionName: z.string(),
		});
	},
	handleServerError(e) {
		console.error("Action error:", e);

		if (
			e instanceof Prisma.PrismaClientInitializationError ||
			e instanceof Prisma.PrismaClientKnownRequestError ||
			e instanceof Prisma.PrismaClientUnknownRequestError ||
			e instanceof Prisma.PrismaClientValidationError
		) {
			return DATABASE_ERROR_MESSAGE;
		}

		if (e instanceof ActionError) {
			return e.message;
		}

		return DEFAULT_SERVER_ERROR_MESSAGE;
	},
});

export const loggingMiddleware = createMiddleware<{
	metadata: {
		actionName: string;
	};
}>().define(async ({ next, metadata, clientInput }) => {
	const start = performance.now();

	if (process.env.NODE_ENV === "development") {
		console.info("▶️ Action started", {
			action: metadata.actionName,
			input: clientInput,
		});
	}

	try {
		const result = await next();

		const duration = Math.round(performance.now() - start);

		if (process.env.NODE_ENV === "development") {
			console.info("✅ Action success", {
				action: metadata.actionName,
				durationMs: duration,
			});
		}

		return result;
	} catch (error) {
		const duration = Math.round(performance.now() - start);

		console.error("❌ Action failed", {
			action: metadata.actionName,
			durationMs: duration,
			error,
		});

		throw error;
	}
});

export const requireProfileMiddleWare = createMiddleware<{ metadata: { actionName: string } }>().define(async ({ next }) => {
	const profile = await currentProfile();

	if (!profile) {
		throw new ActionError("Unauthorized");
	}
	return next({
		ctx: { profile },
	});
});

// auth action client
export const actionClientWithProfile = actionClient.use(loggingMiddleware).use(requireProfileMiddleWare);
