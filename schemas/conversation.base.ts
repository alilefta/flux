import { ConversationModelSchema } from "@/prisma/generated/schemas";
import z from "zod";

export const ConversationBaseSchema = ConversationModelSchema.omit({
	memberOne: true,
	memberTwo: true,
	directMessages: true,
});

export type ConversationBase = z.infer<typeof ConversationBaseSchema>;

// Define locally or import from schema file
export const GetDirectMessageSchema = z.object({
	conversationId: z.string(),
	cursor: z.date().optional(),
});

export const SendDirectMessageSchema = z.object({
	conversationId: z.string(),
	content: z.string().min(1),
	// No file array support in DM schema yet, using deprecated fileUrl for MVP if needed
	fileUrl: z.string().optional(),
});
