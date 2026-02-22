import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  content: z.string(),
  fileUrl: z.string().optional().nullable(),
  memberId: z.string(),
  deleted: z.boolean().optional(),
  edited: z.boolean().optional(),
  pinned: z.boolean().optional(),
  replyToId: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const DirectMessageCreateManyConversationInputObjectSchema: z.ZodType<Prisma.DirectMessageCreateManyConversationInput> = makeSchema() as unknown as z.ZodType<Prisma.DirectMessageCreateManyConversationInput>;
export const DirectMessageCreateManyConversationInputObjectZodSchema = makeSchema();
