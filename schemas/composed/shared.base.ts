import z from "zod";
import { MemberRoleSchema } from "@/prisma/generated/schemas";
import { FileAttachmentSchema } from "../file-attachement.base";

export const ChatTypeSchema = z.enum(["channel", "conversation"]);
export type ChatType = z.infer<typeof ChatTypeSchema>;

export const MessageSenderSchema = z.object({
	id: z.uuid(),
	profileId: z.uuid(),
	name: z.string(),
	imageUrl: z.url().nullable(),
	email: z.email(),
	role: MemberRoleSchema,
	serverId: z.string().optional(), // Optional for DMs
});

export type MessageSender = z.infer<typeof MessageSenderSchema>;

export const ReplyMessageUISchema = z
	.object({
		id: z.uuid(),
		content: z.string(),
		sender: MessageSenderSchema,
		attachments: z.array(FileAttachmentSchema).optional(),
		deleted: z.boolean().default(false).optional(),
	})
	.nullable();

export type ReplyMessageUI = z.infer<typeof ReplyMessageUISchema>;
