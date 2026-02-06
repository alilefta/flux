import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ChannelTypeSchema } from '../enums/ChannelType.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumChannelTypeFilterObjectSchema as NestedEnumChannelTypeFilterObjectSchema } from './NestedEnumChannelTypeFilter.schema'

const nestedenumchanneltypewithaggregatesfilterSchema = z.object({
  equals: ChannelTypeSchema.optional(),
  in: ChannelTypeSchema.array().optional(),
  notIn: ChannelTypeSchema.array().optional(),
  not: z.union([ChannelTypeSchema, z.lazy(() => NestedEnumChannelTypeWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumChannelTypeFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumChannelTypeFilterObjectSchema).optional()
}).strict();
export const NestedEnumChannelTypeWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedEnumChannelTypeWithAggregatesFilter> = nestedenumchanneltypewithaggregatesfilterSchema as unknown as z.ZodType<Prisma.NestedEnumChannelTypeWithAggregatesFilter>;
export const NestedEnumChannelTypeWithAggregatesFilterObjectZodSchema = nestedenumchanneltypewithaggregatesfilterSchema;
