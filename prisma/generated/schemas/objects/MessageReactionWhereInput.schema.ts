import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { MessageNullableScalarRelationFilterObjectSchema as MessageNullableScalarRelationFilterObjectSchema } from './MessageNullableScalarRelationFilter.schema';
import { MessageWhereInputObjectSchema as MessageWhereInputObjectSchema } from './MessageWhereInput.schema';
import { DirectMessageNullableScalarRelationFilterObjectSchema as DirectMessageNullableScalarRelationFilterObjectSchema } from './DirectMessageNullableScalarRelationFilter.schema';
import { DirectMessageWhereInputObjectSchema as DirectMessageWhereInputObjectSchema } from './DirectMessageWhereInput.schema';
import { ProfileScalarRelationFilterObjectSchema as ProfileScalarRelationFilterObjectSchema } from './ProfileScalarRelationFilter.schema';
import { ProfileWhereInputObjectSchema as ProfileWhereInputObjectSchema } from './ProfileWhereInput.schema'

const messagereactionwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => MessageReactionWhereInputObjectSchema), z.lazy(() => MessageReactionWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => MessageReactionWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => MessageReactionWhereInputObjectSchema), z.lazy(() => MessageReactionWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  emoji: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  messageId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  directMessageId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  profileId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  message: z.union([z.lazy(() => MessageNullableScalarRelationFilterObjectSchema), z.lazy(() => MessageWhereInputObjectSchema)]).optional(),
  directMessage: z.union([z.lazy(() => DirectMessageNullableScalarRelationFilterObjectSchema), z.lazy(() => DirectMessageWhereInputObjectSchema)]).optional(),
  profile: z.union([z.lazy(() => ProfileScalarRelationFilterObjectSchema), z.lazy(() => ProfileWhereInputObjectSchema)]).optional()
}).strict();
export const MessageReactionWhereInputObjectSchema: z.ZodType<Prisma.MessageReactionWhereInput> = messagereactionwhereinputSchema as unknown as z.ZodType<Prisma.MessageReactionWhereInput>;
export const MessageReactionWhereInputObjectZodSchema = messagereactionwhereinputSchema;
