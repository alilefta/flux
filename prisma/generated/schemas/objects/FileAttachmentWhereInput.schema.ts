import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { MessageScalarRelationFilterObjectSchema as MessageScalarRelationFilterObjectSchema } from './MessageScalarRelationFilter.schema';
import { MessageWhereInputObjectSchema as MessageWhereInputObjectSchema } from './MessageWhereInput.schema'

const fileattachmentwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => FileAttachmentWhereInputObjectSchema), z.lazy(() => FileAttachmentWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => FileAttachmentWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => FileAttachmentWhereInputObjectSchema), z.lazy(() => FileAttachmentWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  url: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  type: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  size: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  messageId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  message: z.union([z.lazy(() => MessageScalarRelationFilterObjectSchema), z.lazy(() => MessageWhereInputObjectSchema)]).optional()
}).strict();
export const FileAttachmentWhereInputObjectSchema: z.ZodType<Prisma.FileAttachmentWhereInput> = fileattachmentwhereinputSchema as unknown as z.ZodType<Prisma.FileAttachmentWhereInput>;
export const FileAttachmentWhereInputObjectZodSchema = fileattachmentwhereinputSchema;
