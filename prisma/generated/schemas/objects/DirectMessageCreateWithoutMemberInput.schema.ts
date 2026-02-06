import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ConversationCreateNestedOneWithoutDirectMessagesInputObjectSchema as ConversationCreateNestedOneWithoutDirectMessagesInputObjectSchema } from './ConversationCreateNestedOneWithoutDirectMessagesInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  content: z.string(),
  fileUrl: z.string().optional().nullable(),
  deleted: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  conversation: z.lazy(() => ConversationCreateNestedOneWithoutDirectMessagesInputObjectSchema)
}).strict();
export const DirectMessageCreateWithoutMemberInputObjectSchema: z.ZodType<Prisma.DirectMessageCreateWithoutMemberInput> = makeSchema() as unknown as z.ZodType<Prisma.DirectMessageCreateWithoutMemberInput>;
export const DirectMessageCreateWithoutMemberInputObjectZodSchema = makeSchema();
