import * as z from 'zod';
export const MessageDeleteResultSchema = z.nullable(z.object({
  id: z.string(),
  content: z.string(),
  fileUrl: z.string().optional(),
  memberId: z.string(),
  member: z.unknown(),
  channelId: z.string(),
  channel: z.unknown(),
  deleted: z.boolean(),
  edited: z.boolean(),
  pinned: z.boolean(),
  attachments: z.array(z.unknown()),
  reactions: z.array(z.unknown()),
  replyToId: z.string().optional(),
  replyTo: z.unknown().optional(),
  replies: z.array(z.unknown()),
  createdAt: z.date(),
  updatedAt: z.date()
}));