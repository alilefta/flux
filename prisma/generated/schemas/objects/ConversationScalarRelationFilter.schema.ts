import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ConversationWhereInputObjectSchema as ConversationWhereInputObjectSchema } from './ConversationWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => ConversationWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => ConversationWhereInputObjectSchema).optional()
}).strict();
export const ConversationScalarRelationFilterObjectSchema: z.ZodType<Prisma.ConversationScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.ConversationScalarRelationFilter>;
export const ConversationScalarRelationFilterObjectZodSchema = makeSchema();
