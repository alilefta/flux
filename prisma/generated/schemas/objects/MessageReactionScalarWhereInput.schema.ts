import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const messagereactionscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => MessageReactionScalarWhereInputObjectSchema), z.lazy(() => MessageReactionScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => MessageReactionScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => MessageReactionScalarWhereInputObjectSchema), z.lazy(() => MessageReactionScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  emoji: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  messageId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  directMessageId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  memberId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  profileId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const MessageReactionScalarWhereInputObjectSchema: z.ZodType<Prisma.MessageReactionScalarWhereInput> = messagereactionscalarwhereinputSchema as unknown as z.ZodType<Prisma.MessageReactionScalarWhereInput>;
export const MessageReactionScalarWhereInputObjectZodSchema = messagereactionscalarwhereinputSchema;
