// Add to src/types/index.ts

import z from "zod";
import { ProfileSchema } from "./profile";

export const MessageSchema = z.object({
	id: z.string(),
	content: z.string(),
	memberId: z.string(),
	member: ProfileSchema, // The sender
	createdAt: z.string(), // ISO String
	updatedAt: z.string(),
	deleted: z.boolean(),
});

export type Message = z.infer<typeof MessageSchema>;
