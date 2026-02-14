import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { ServerScalarRelationFilterObjectSchema as ServerScalarRelationFilterObjectSchema } from './ServerScalarRelationFilter.schema';
import { ServerWhereInputObjectSchema as ServerWhereInputObjectSchema } from './ServerWhereInput.schema';
import { ChannelListRelationFilterObjectSchema as ChannelListRelationFilterObjectSchema } from './ChannelListRelationFilter.schema'

const channelcategorywhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ChannelCategoryWhereInputObjectSchema), z.lazy(() => ChannelCategoryWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ChannelCategoryWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ChannelCategoryWhereInputObjectSchema), z.lazy(() => ChannelCategoryWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  position: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  serverId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  server: z.union([z.lazy(() => ServerScalarRelationFilterObjectSchema), z.lazy(() => ServerWhereInputObjectSchema)]).optional(),
  channels: z.lazy(() => ChannelListRelationFilterObjectSchema).optional()
}).strict();
export const ChannelCategoryWhereInputObjectSchema: z.ZodType<Prisma.ChannelCategoryWhereInput> = channelcategorywhereinputSchema as unknown as z.ZodType<Prisma.ChannelCategoryWhereInput>;
export const ChannelCategoryWhereInputObjectZodSchema = channelcategorywhereinputSchema;
