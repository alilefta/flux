import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MessageWhereInputObjectSchema as MessageWhereInputObjectSchema } from './MessageWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => MessageWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => MessageWhereInputObjectSchema).optional().nullable()
}).strict();
export const MessageNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.MessageNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.MessageNullableScalarRelationFilter>;
export const MessageNullableScalarRelationFilterObjectZodSchema = makeSchema();
