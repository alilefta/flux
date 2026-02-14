import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const messagereactionscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => MessageReactionScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => MessageReactionScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => MessageReactionScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => MessageReactionScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => MessageReactionScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  emoji: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  messageId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  memberId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  profileId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const MessageReactionScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.MessageReactionScalarWhereWithAggregatesInput> = messagereactionscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.MessageReactionScalarWhereWithAggregatesInput>;
export const MessageReactionScalarWhereWithAggregatesInputObjectZodSchema = messagereactionscalarwherewithaggregatesinputSchema;
