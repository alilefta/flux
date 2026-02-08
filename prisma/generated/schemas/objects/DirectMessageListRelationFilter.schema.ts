import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { DirectMessageWhereInputObjectSchema as DirectMessageWhereInputObjectSchema } from './DirectMessageWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => DirectMessageWhereInputObjectSchema).optional(),
  some: z.lazy(() => DirectMessageWhereInputObjectSchema).optional(),
  none: z.lazy(() => DirectMessageWhereInputObjectSchema).optional()
}).strict();
export const DirectMessageListRelationFilterObjectSchema: z.ZodType<Prisma.DirectMessageListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.DirectMessageListRelationFilter>;
export const DirectMessageListRelationFilterObjectZodSchema = makeSchema();
