import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MessageWhereInputObjectSchema as MessageWhereInputObjectSchema } from './MessageWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => MessageWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => MessageWhereInputObjectSchema).optional()
}).strict();
export const MessageScalarRelationFilterObjectSchema: z.ZodType<Prisma.MessageScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.MessageScalarRelationFilter>;
export const MessageScalarRelationFilterObjectZodSchema = makeSchema();
