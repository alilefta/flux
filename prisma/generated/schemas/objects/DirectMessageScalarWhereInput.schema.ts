import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const directmessagescalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => DirectMessageScalarWhereInputObjectSchema), z.lazy(() => DirectMessageScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => DirectMessageScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => DirectMessageScalarWhereInputObjectSchema), z.lazy(() => DirectMessageScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  content: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  fileUrl: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  memberId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  conversationId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  deleted: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  edited: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const DirectMessageScalarWhereInputObjectSchema: z.ZodType<Prisma.DirectMessageScalarWhereInput> = directmessagescalarwhereinputSchema as unknown as z.ZodType<Prisma.DirectMessageScalarWhereInput>;
export const DirectMessageScalarWhereInputObjectZodSchema = directmessagescalarwhereinputSchema;
