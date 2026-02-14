import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ProfileCreateNestedOneWithoutDirectMessagesInputObjectSchema as ProfileCreateNestedOneWithoutDirectMessagesInputObjectSchema } from './ProfileCreateNestedOneWithoutDirectMessagesInput.schema';
import { ConversationCreateNestedOneWithoutDirectMessagesInputObjectSchema as ConversationCreateNestedOneWithoutDirectMessagesInputObjectSchema } from './ConversationCreateNestedOneWithoutDirectMessagesInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  content: z.string(),
  fileUrl: z.string().optional().nullable(),
  deleted: z.boolean().optional(),
  edited: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  member: z.lazy(() => ProfileCreateNestedOneWithoutDirectMessagesInputObjectSchema),
  conversation: z.lazy(() => ConversationCreateNestedOneWithoutDirectMessagesInputObjectSchema)
}).strict();
export const DirectMessageCreateInputObjectSchema: z.ZodType<Prisma.DirectMessageCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.DirectMessageCreateInput>;
export const DirectMessageCreateInputObjectZodSchema = makeSchema();
