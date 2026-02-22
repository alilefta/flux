import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { IntNullableWithAggregatesFilterObjectSchema as IntNullableWithAggregatesFilterObjectSchema } from './IntNullableWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const fileattachmentscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => FileAttachmentScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => FileAttachmentScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => FileAttachmentScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => FileAttachmentScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => FileAttachmentScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  url: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  type: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  size: z.union([z.lazy(() => IntNullableWithAggregatesFilterObjectSchema), z.number().int()]).optional().nullable(),
  messageId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  directMessageId: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const FileAttachmentScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.FileAttachmentScalarWhereWithAggregatesInput> = fileattachmentscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.FileAttachmentScalarWhereWithAggregatesInput>;
export const FileAttachmentScalarWhereWithAggregatesInputObjectZodSchema = fileattachmentscalarwherewithaggregatesinputSchema;
