import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { ProfileScalarRelationFilterObjectSchema as ProfileScalarRelationFilterObjectSchema } from './ProfileScalarRelationFilter.schema';
import { ProfileWhereInputObjectSchema as ProfileWhereInputObjectSchema } from './ProfileWhereInput.schema';
import { DirectMessageListRelationFilterObjectSchema as DirectMessageListRelationFilterObjectSchema } from './DirectMessageListRelationFilter.schema'

const conversationwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ConversationWhereInputObjectSchema), z.lazy(() => ConversationWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ConversationWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ConversationWhereInputObjectSchema), z.lazy(() => ConversationWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  memberOneId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  memberTwoId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  memberOne: z.union([z.lazy(() => ProfileScalarRelationFilterObjectSchema), z.lazy(() => ProfileWhereInputObjectSchema)]).optional(),
  memberTwo: z.union([z.lazy(() => ProfileScalarRelationFilterObjectSchema), z.lazy(() => ProfileWhereInputObjectSchema)]).optional(),
  directMessages: z.lazy(() => DirectMessageListRelationFilterObjectSchema).optional()
}).strict();
export const ConversationWhereInputObjectSchema: z.ZodType<Prisma.ConversationWhereInput> = conversationwhereinputSchema as unknown as z.ZodType<Prisma.ConversationWhereInput>;
export const ConversationWhereInputObjectZodSchema = conversationwhereinputSchema;
