import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ProfileCreateNestedOneWithoutDirectMessagesInputObjectSchema as ProfileCreateNestedOneWithoutDirectMessagesInputObjectSchema } from './ProfileCreateNestedOneWithoutDirectMessagesInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  content: z.string(),
  fileUrl: z.string().optional().nullable(),
  deleted: z.boolean().optional(),
  edited: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  member: z.lazy(() => ProfileCreateNestedOneWithoutDirectMessagesInputObjectSchema)
}).strict();
export const DirectMessageCreateWithoutConversationInputObjectSchema: z.ZodType<Prisma.DirectMessageCreateWithoutConversationInput> = makeSchema() as unknown as z.ZodType<Prisma.DirectMessageCreateWithoutConversationInput>;
export const DirectMessageCreateWithoutConversationInputObjectZodSchema = makeSchema();
