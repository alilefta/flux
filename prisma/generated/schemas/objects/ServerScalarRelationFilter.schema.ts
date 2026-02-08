import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ServerWhereInputObjectSchema as ServerWhereInputObjectSchema } from './ServerWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => ServerWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => ServerWhereInputObjectSchema).optional()
}).strict();
export const ServerScalarRelationFilterObjectSchema: z.ZodType<Prisma.ServerScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.ServerScalarRelationFilter>;
export const ServerScalarRelationFilterObjectZodSchema = makeSchema();
