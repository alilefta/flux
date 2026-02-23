import { MemberRoleSchema } from "@/prisma/generated/schemas";
import z from "zod";

export const MessageSenderSchema = z.object({
	id: z.uuid(),
	profileId: z.uuid(),
	name: z.string(),
	imageUrl: z.url().nullable(),
	email: z.email(),
	role: MemberRoleSchema,
});

export type MessageSender = z.infer<typeof MessageSenderSchema>;
