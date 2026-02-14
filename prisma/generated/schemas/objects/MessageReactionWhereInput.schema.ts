import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { MessageScalarRelationFilterObjectSchema as MessageScalarRelationFilterObjectSchema } from './MessageScalarRelationFilter.schema';
import { MessageWhereInputObjectSchema as MessageWhereInputObjectSchema } from './MessageWhereInput.schema'

const messagereactionwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => MessageReactionWhereInputObjectSchema), z.lazy(() => MessageReactionWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => MessageReactionWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => MessageReactionWhereInputObjectSchema), z.lazy(() => MessageReactionWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  emoji: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  messageId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  memberId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  profileId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  message: z.union([z.lazy(() => MessageScalarRelationFilterObjectSchema), z.lazy(() => MessageWhereInputObjectSchema)]).optional()
}).strict();
export const MessageReactionWhereInputObjectSchema: z.ZodType<Prisma.MessageReactionWhereInput> = messagereactionwhereinputSchema as unknown as z.ZodType<Prisma.MessageReactionWhereInput>;
export const MessageReactionWhereInputObjectZodSchema = messagereactionwhereinputSchema;
