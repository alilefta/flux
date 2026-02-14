import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  content: z.string(),
  fileUrl: z.string().optional().nullable(),
  memberId: z.string(),
  channelId: z.string(),
  deleted: z.boolean().optional(),
  edited: z.boolean().optional(),
  pinned: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const MessageCreateManyReplyToInputObjectSchema: z.ZodType<Prisma.MessageCreateManyReplyToInput> = makeSchema() as unknown as z.ZodType<Prisma.MessageCreateManyReplyToInput>;
export const MessageCreateManyReplyToInputObjectZodSchema = makeSchema();
