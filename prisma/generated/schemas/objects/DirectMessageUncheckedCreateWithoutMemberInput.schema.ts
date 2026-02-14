import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  content: z.string(),
  fileUrl: z.string().optional().nullable(),
  conversationId: z.string(),
  deleted: z.boolean().optional(),
  edited: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const DirectMessageUncheckedCreateWithoutMemberInputObjectSchema: z.ZodType<Prisma.DirectMessageUncheckedCreateWithoutMemberInput> = makeSchema() as unknown as z.ZodType<Prisma.DirectMessageUncheckedCreateWithoutMemberInput>;
export const DirectMessageUncheckedCreateWithoutMemberInputObjectZodSchema = makeSchema();
