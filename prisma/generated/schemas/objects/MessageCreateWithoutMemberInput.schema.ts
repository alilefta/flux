import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ChannelCreateNestedOneWithoutMessagesInputObjectSchema as ChannelCreateNestedOneWithoutMessagesInputObjectSchema } from './ChannelCreateNestedOneWithoutMessagesInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  content: z.string(),
  fileUrl: z.string().optional().nullable(),
  deleted: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  edited: z.boolean().optional(),
  channel: z.lazy(() => ChannelCreateNestedOneWithoutMessagesInputObjectSchema)
}).strict();
export const MessageCreateWithoutMemberInputObjectSchema: z.ZodType<Prisma.MessageCreateWithoutMemberInput> = makeSchema() as unknown as z.ZodType<Prisma.MessageCreateWithoutMemberInput>;
export const MessageCreateWithoutMemberInputObjectZodSchema = makeSchema();
