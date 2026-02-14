import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const channelcategoryscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => ChannelCategoryScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ChannelCategoryScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ChannelCategoryScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ChannelCategoryScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ChannelCategoryScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  position: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  serverId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const ChannelCategoryScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.ChannelCategoryScalarWhereWithAggregatesInput> = channelcategoryscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.ChannelCategoryScalarWhereWithAggregatesInput>;
export const ChannelCategoryScalarWhereWithAggregatesInputObjectZodSchema = channelcategoryscalarwherewithaggregatesinputSchema;
