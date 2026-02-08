import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MemberCreateNestedOneWithoutMessagesInputObjectSchema as MemberCreateNestedOneWithoutMessagesInputObjectSchema } from './MemberCreateNestedOneWithoutMessagesInput.schema';
import { ChannelCreateNestedOneWithoutMessagesInputObjectSchema as ChannelCreateNestedOneWithoutMessagesInputObjectSchema } from './ChannelCreateNestedOneWithoutMessagesInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  content: z.string(),
  fileUrl: z.string().optional().nullable(),
  deleted: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  edited: z.boolean().optional(),
  member: z.lazy(() => MemberCreateNestedOneWithoutMessagesInputObjectSchema),
  channel: z.lazy(() => ChannelCreateNestedOneWithoutMessagesInputObjectSchema)
}).strict();
export const MessageCreateInputObjectSchema: z.ZodType<Prisma.MessageCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.MessageCreateInput>;
export const MessageCreateInputObjectZodSchema = makeSchema();
