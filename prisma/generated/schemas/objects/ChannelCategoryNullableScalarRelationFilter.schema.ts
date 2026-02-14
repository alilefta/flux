import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ChannelCategoryWhereInputObjectSchema as ChannelCategoryWhereInputObjectSchema } from './ChannelCategoryWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => ChannelCategoryWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => ChannelCategoryWhereInputObjectSchema).optional().nullable()
}).strict();
export const ChannelCategoryNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.ChannelCategoryNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.ChannelCategoryNullableScalarRelationFilter>;
export const ChannelCategoryNullableScalarRelationFilterObjectZodSchema = makeSchema();
