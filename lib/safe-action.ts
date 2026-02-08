import { getCurrentProfile } from "@/data/profile";
import { Prisma } from "@/generated/prisma/client";
import { createMiddleware, createSafeActionClient, DEFAULT_SERVER_ERROR_MESSAGE } from "next-safe-action";
import z from "zod";
import { DATABASE_ERROR_MESSAGE } from "./safe-action-helpers";
import { ActionError } from "@/lib/errors";
import prisma from "./prisma";

// base action
export const actionClient = createSafeActionClient({
	defineMetadataSchema() {
		return z.object({
			actionName: z.string(),
		});
	},
	handleServerError(e) {
		console.error("Action error:", e);

		// Prisma errors
		if (e instanceof Prisma.PrismaClientKnownRequestError) {
			switch (e.code) {
				case "P2002":
					return "A record with this value already exists";
				case "P2025":
					return "Record not found";
				case "P2003":
					return "Related record not found";
				default:
					return DATABASE_ERROR_MESSAGE;
			}
		}

		if (
			e instanceof Prisma.PrismaClientInitializationError ||
			e instanceof Prisma.PrismaClientUnknownRequestError ||
			e instanceof Prisma.PrismaClientValidationError ||
			e instanceof Prisma.PrismaClientKnownRequestError
		) {
			return DATABASE_ERROR_MESSAGE;
		}

		// Custom action errors
		if (e instanceof ActionError) {
			return e.message;
		}

		// Generic errors
		if (e instanceof Error) {
			// Don't expose internal errors in production
			if (process.env.NODE_ENV === "production") {
				return DEFAULT_SERVER_ERROR_MESSAGE;
			}
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
	try {
		const profile = await getCurrentProfile();

		return next({
			ctx: { profile },
		});
	} catch (error: unknown) {
		throw new ActionError("You must be logged in", "UNAUTHORIZED");
	}
});

// Optional: Add server-specific auth
export const requireServerMemberMiddleware = createMiddleware<{
	metadata: { actionName: string };
}>().define(async ({ next, clientInput }) => {
	const profile = await getCurrentProfile();

	// Assuming serverId is in input
	const serverId = (clientInput as any).serverId;

	if (!serverId) {
		throw new ActionError("Server ID required");
	}

	const member = await prisma.member.findFirst({
		where: {
			profileId: profile.id,
			serverId,
		},
	});

	if (!member) {
		throw new ActionError("You are not a member of this server", "NOT_MEMBER");
	}

	return next({
		ctx: {
			profile,
			member,
			serverId,
		},
	});
});

// auth action client
export const actionClientWithProfile = actionClient.use(loggingMiddleware).use(requireProfileMiddleWare);
