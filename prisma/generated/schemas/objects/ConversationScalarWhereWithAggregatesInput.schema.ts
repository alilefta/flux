import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema'

const conversationscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => ConversationScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ConversationScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ConversationScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ConversationScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ConversationScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  memberOneId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  memberTwoId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional()
}).strict();
export const ConversationScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.ConversationScalarWhereWithAggregatesInput> = conversationscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.ConversationScalarWhereWithAggregatesInput>;
export const ConversationScalarWhereWithAggregatesInputObjectZodSchema = conversationscalarwherewithaggregatesinputSchema;
