import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ChannelTypeSchema } from '../enums/ChannelType.schema'

const nestedenumchanneltypefilterSchema = z.object({
  equals: ChannelTypeSchema.optional(),
  in: ChannelTypeSchema.array().optional(),
  notIn: ChannelTypeSchema.array().optional(),
  not: z.union([ChannelTypeSchema, z.lazy(() => NestedEnumChannelTypeFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumChannelTypeFilterObjectSchema: z.ZodType<Prisma.NestedEnumChannelTypeFilter> = nestedenumchanneltypefilterSchema as unknown as z.ZodType<Prisma.NestedEnumChannelTypeFilter>;
export const NestedEnumChannelTypeFilterObjectZodSchema = nestedenumchanneltypefilterSchema;
