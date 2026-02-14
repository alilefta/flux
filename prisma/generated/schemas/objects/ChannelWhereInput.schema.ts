import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { EnumChannelTypeFilterObjectSchema as EnumChannelTypeFilterObjectSchema } from './EnumChannelTypeFilter.schema';
import { ChannelTypeSchema } from '../enums/ChannelType.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { ProfileScalarRelationFilterObjectSchema as ProfileScalarRelationFilterObjectSchema } from './ProfileScalarRelationFilter.schema';
import { ProfileWhereInputObjectSchema as ProfileWhereInputObjectSchema } from './ProfileWhereInput.schema';
import { ServerScalarRelationFilterObjectSchema as ServerScalarRelationFilterObjectSchema } from './ServerScalarRelationFilter.schema';
import { ServerWhereInputObjectSchema as ServerWhereInputObjectSchema } from './ServerWhereInput.schema';
import { ChannelCategoryNullableScalarRelationFilterObjectSchema as ChannelCategoryNullableScalarRelationFilterObjectSchema } from './ChannelCategoryNullableScalarRelationFilter.schema';
import { ChannelCategoryWhereInputObjectSchema as ChannelCategoryWhereInputObjectSchema } from './ChannelCategoryWhereInput.schema';
import { MessageListRelationFilterObjectSchema as MessageListRelationFilterObjectSchema } from './MessageListRelationFilter.schema'

const channelwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ChannelWhereInputObjectSchema), z.lazy(() => ChannelWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ChannelWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ChannelWhereInputObjectSchema), z.lazy(() => ChannelWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  type: z.union([z.lazy(() => EnumChannelTypeFilterObjectSchema), ChannelTypeSchema]).optional(),
  topic: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  position: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  profileId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  serverId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  categoryId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  isDefault: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  isLocked: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  slowModeRate: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  profile: z.union([z.lazy(() => ProfileScalarRelationFilterObjectSchema), z.lazy(() => ProfileWhereInputObjectSchema)]).optional(),
  server: z.union([z.lazy(() => ServerScalarRelationFilterObjectSchema), z.lazy(() => ServerWhereInputObjectSchema)]).optional(),
  category: z.union([z.lazy(() => ChannelCategoryNullableScalarRelationFilterObjectSchema), z.lazy(() => ChannelCategoryWhereInputObjectSchema)]).optional(),
  messages: z.lazy(() => MessageListRelationFilterObjectSchema).optional()
}).strict();
export const ChannelWhereInputObjectSchema: z.ZodType<Prisma.ChannelWhereInput> = channelwhereinputSchema as unknown as z.ZodType<Prisma.ChannelWhereInput>;
export const ChannelWhereInputObjectZodSchema = channelwhereinputSchema;
