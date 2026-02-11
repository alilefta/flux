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
	CHANNEL_NAME_MUST_NOT_BE_GENERAL: new ActionError("Channel name cannot be 'general'", "INVALID_NAME", 400),
	UNAUTHORIZE_ONLY_ADMINS_OR_MODERATORS: new ActionError("Unauthorized: Only Admins or Moderators can create channels", "UNAUTHORIZED", 401),
	UNABLE_TO_REMOVE_DEFAULT_GENERAL_CHANNEL: new ActionError("Invalid Operation: Unable to remove the default server channel.", "INVALID_OPERATION", 401),
} as const;
