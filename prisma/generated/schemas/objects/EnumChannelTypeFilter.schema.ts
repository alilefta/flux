import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ChannelTypeSchema } from '../enums/ChannelType.schema';
import { NestedEnumChannelTypeFilterObjectSchema as NestedEnumChannelTypeFilterObjectSchema } from './NestedEnumChannelTypeFilter.schema'

const makeSchema = () => z.object({
  equals: ChannelTypeSchema.optional(),
  in: ChannelTypeSchema.array().optional(),
  notIn: ChannelTypeSchema.array().optional(),
  not: z.union([ChannelTypeSchema, z.lazy(() => NestedEnumChannelTypeFilterObjectSchema)]).optional()
}).strict();
export const EnumChannelTypeFilterObjectSchema: z.ZodType<Prisma.EnumChannelTypeFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumChannelTypeFilter>;
export const EnumChannelTypeFilterObjectZodSchema = makeSchema();
