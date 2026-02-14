import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MessageReactionWhereInputObjectSchema as MessageReactionWhereInputObjectSchema } from './MessageReactionWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => MessageReactionWhereInputObjectSchema).optional(),
  some: z.lazy(() => MessageReactionWhereInputObjectSchema).optional(),
  none: z.lazy(() => MessageReactionWhereInputObjectSchema).optional()
}).strict();
export const MessageReactionListRelationFilterObjectSchema: z.ZodType<Prisma.MessageReactionListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.MessageReactionListRelationFilter>;
export const MessageReactionListRelationFilterObjectZodSchema = makeSchema();
