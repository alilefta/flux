// /lib/errors.ts
export class ActionError extends Error {
	constructor(
		message: string,
		public code?: string,
		public statusCode?: number,
	) {
		super(message);
		this.name = "ActionError";
	}
}

// Common errors
export const ERRORS = {
	UNAUTHORIZED: new ActionError("You must be logged in", "UNAUTHORIZED", 401),
	FORBIDDEN: new ActionError("You don't have permission", "FORBIDDEN", 403),
	NOT_FOUND: new ActionError("Resource not found", "NOT_FOUND", 404),
	NOT_MEMBER: new ActionError("You are not a member of this server", "NOT_MEMBER", 403),
	CHANNEL_NOT_FOUND: new ActionError("Channel not found", "CHANNEL_NOT_FOUND", 404),
	INVALID_INPUT: new ActionError("Invalid input", "INVALID_INPUT", 400),
} as const;
