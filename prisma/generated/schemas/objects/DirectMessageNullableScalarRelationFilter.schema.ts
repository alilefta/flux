import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { DirectMessageWhereInputObjectSchema as DirectMessageWhereInputObjectSchema } from './DirectMessageWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => DirectMessageWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => DirectMessageWhereInputObjectSchema).optional().nullable()
}).strict();
export const DirectMessageNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.DirectMessageNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.DirectMessageNullableScalarRelationFilter>;
export const DirectMessageNullableScalarRelationFilterObjectZodSchema = makeSchema();
