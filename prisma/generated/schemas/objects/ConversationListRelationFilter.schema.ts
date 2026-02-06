import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ConversationWhereInputObjectSchema as ConversationWhereInputObjectSchema } from './ConversationWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => ConversationWhereInputObjectSchema).optional(),
  some: z.lazy(() => ConversationWhereInputObjectSchema).optional(),
  none: z.lazy(() => ConversationWhereInputObjectSchema).optional()
}).strict();
export const ConversationListRelationFilterObjectSchema: z.ZodType<Prisma.ConversationListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.ConversationListRelationFilter>;
export const ConversationListRelationFilterObjectZodSchema = makeSchema();
