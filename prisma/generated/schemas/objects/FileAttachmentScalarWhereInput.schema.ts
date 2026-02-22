import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const fileattachmentscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => FileAttachmentScalarWhereInputObjectSchema), z.lazy(() => FileAttachmentScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => FileAttachmentScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => FileAttachmentScalarWhereInputObjectSchema), z.lazy(() => FileAttachmentScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  url: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  type: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  size: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  messageId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  directMessageId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const FileAttachmentScalarWhereInputObjectSchema: z.ZodType<Prisma.FileAttachmentScalarWhereInput> = fileattachmentscalarwhereinputSchema as unknown as z.ZodType<Prisma.FileAttachmentScalarWhereInput>;
export const FileAttachmentScalarWhereInputObjectZodSchema = fileattachmentscalarwhereinputSchema;
