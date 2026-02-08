import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { EnumChannelTypeWithAggregatesFilterObjectSchema as EnumChannelTypeWithAggregatesFilterObjectSchema } from './EnumChannelTypeWithAggregatesFilter.schema';
import { ChannelTypeSchema } from '../enums/ChannelType.schema';
import { BoolWithAggregatesFilterObjectSchema as BoolWithAggregatesFilterObjectSchema } from './BoolWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const channelscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => ChannelScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ChannelScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ChannelScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ChannelScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ChannelScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  type: z.union([z.lazy(() => EnumChannelTypeWithAggregatesFilterObjectSchema), ChannelTypeSchema]).optional(),
  profileId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  serverId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  isDefault: z.union([z.lazy(() => BoolWithAggregatesFilterObjectSchema), z.boolean()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const ChannelScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.ChannelScalarWhereWithAggregatesInput> = channelscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.ChannelScalarWhereWithAggregatesInput>;
export const ChannelScalarWhereWithAggregatesInputObjectZodSchema = channelscalarwherewithaggregatesinputSchema;
