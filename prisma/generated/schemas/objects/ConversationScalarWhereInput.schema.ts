import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const conversationscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ConversationScalarWhereInputObjectSchema), z.lazy(() => ConversationScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ConversationScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ConversationScalarWhereInputObjectSchema), z.lazy(() => ConversationScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  memberOneId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  memberTwoId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const ConversationScalarWhereInputObjectSchema: z.ZodType<Prisma.ConversationScalarWhereInput> = conversationscalarwhereinputSchema as unknown as z.ZodType<Prisma.ConversationScalarWhereInput>;
export const ConversationScalarWhereInputObjectZodSchema = conversationscalarwhereinputSchema;
