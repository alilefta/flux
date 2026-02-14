import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ChannelCategoryWhereInputObjectSchema as ChannelCategoryWhereInputObjectSchema } from './ChannelCategoryWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => ChannelCategoryWhereInputObjectSchema).optional(),
  some: z.lazy(() => ChannelCategoryWhereInputObjectSchema).optional(),
  none: z.lazy(() => ChannelCategoryWhereInputObjectSchema).optional()
}).strict();
export const ChannelCategoryListRelationFilterObjectSchema: z.ZodType<Prisma.ChannelCategoryListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.ChannelCategoryListRelationFilter>;
export const ChannelCategoryListRelationFilterObjectZodSchema = makeSchema();
