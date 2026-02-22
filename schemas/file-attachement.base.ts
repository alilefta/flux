import { FileAttachmentModelSchema } from "@/prisma/generated/schemas";
import z from "zod";

//  File Attachment Schema
export const FileAttachmentSchema = FileAttachmentModelSchema.omit({
	message: true,
	directMessage: true,
});

export type FileAttachment = z.infer<typeof FileAttachmentSchema>;

export const FileUploadSchema = z.object({
	url: z.url(),
	name: z.string().min(1),
	type: z.string().min(1),
	size: z.number().positive().optional(),
});

export type FileUploadInput = z.infer<typeof FileUploadSchema>;
