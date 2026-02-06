import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ServerWhereInputObjectSchema as ServerWhereInputObjectSchema } from './ServerWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => ServerWhereInputObjectSchema).optional(),
  some: z.lazy(() => ServerWhereInputObjectSchema).optional(),
  none: z.lazy(() => ServerWhereInputObjectSchema).optional()
}).strict();
export const ServerListRelationFilterObjectSchema: z.ZodType<Prisma.ServerListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.ServerListRelationFilter>;
export const ServerListRelationFilterObjectZodSchema = makeSchema();
