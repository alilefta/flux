import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ChannelWhereInputObjectSchema as ChannelWhereInputObjectSchema } from './ChannelWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => ChannelWhereInputObjectSchema).optional(),
  some: z.lazy(() => ChannelWhereInputObjectSchema).optional(),
  none: z.lazy(() => ChannelWhereInputObjectSchema).optional()
}).strict();
export const ChannelListRelationFilterObjectSchema: z.ZodType<Prisma.ChannelListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.ChannelListRelationFilter>;
export const ChannelListRelationFilterObjectZodSchema = makeSchema();
