import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ChannelWhereInputObjectSchema as ChannelWhereInputObjectSchema } from './ChannelWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => ChannelWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => ChannelWhereInputObjectSchema).optional()
}).strict();
export const ChannelScalarRelationFilterObjectSchema: z.ZodType<Prisma.ChannelScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.ChannelScalarRelationFilter>;
export const ChannelScalarRelationFilterObjectZodSchema = makeSchema();
