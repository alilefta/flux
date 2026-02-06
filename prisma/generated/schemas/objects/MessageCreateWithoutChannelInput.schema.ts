import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MemberCreateNestedOneWithoutMessagesInputObjectSchema as MemberCreateNestedOneWithoutMessagesInputObjectSchema } from './MemberCreateNestedOneWithoutMessagesInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  content: z.string(),
  fileUrl: z.string().optional().nullable(),
  deleted: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  edited: z.boolean().optional(),
  member: z.lazy(() => MemberCreateNestedOneWithoutMessagesInputObjectSchema)
}).strict();
export const MessageCreateWithoutChannelInputObjectSchema: z.ZodType<Prisma.MessageCreateWithoutChannelInput> = makeSchema() as unknown as z.ZodType<Prisma.MessageCreateWithoutChannelInput>;
export const MessageCreateWithoutChannelInputObjectZodSchema = makeSchema();
