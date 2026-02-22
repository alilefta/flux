import * as z from 'zod';

export const FileAttachmentScalarFieldEnumSchema = z.enum(['id', 'url', 'name', 'type', 'size', 'messageId', 'directMessageId', 'createdAt'])

export type FileAttachmentScalarFieldEnum = z.infer<typeof FileAttachmentScalarFieldEnumSchema>;