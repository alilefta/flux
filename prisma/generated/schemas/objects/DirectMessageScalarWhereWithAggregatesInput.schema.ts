import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { BoolWithAggregatesFilterObjectSchema as BoolWithAggregatesFilterObjectSchema } from './BoolWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const directmessagescalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => DirectMessageScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => DirectMessageScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => DirectMessageScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => DirectMessageScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => DirectMessageScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  content: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  fileUrl: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  memberId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  conversationId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  deleted: z.union([z.lazy(() => BoolWithAggregatesFilterObjectSchema), z.boolean()]).optional(),
  edited: z.union([z.lazy(() => BoolWithAggregatesFilterObjectSchema), z.boolean()]).optional(),
  pinned: z.union([z.lazy(() => BoolWithAggregatesFilterObjectSchema), z.boolean()]).optional(),
  replyToId: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const DirectMessageScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.DirectMessageScalarWhereWithAggregatesInput> = directmessagescalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.DirectMessageScalarWhereWithAggregatesInput>;
export const DirectMessageScalarWhereWithAggregatesInputObjectZodSchema = directmessagescalarwherewithaggregatesinputSchema;
