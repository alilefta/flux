import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const channelcategoryscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ChannelCategoryScalarWhereInputObjectSchema), z.lazy(() => ChannelCategoryScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ChannelCategoryScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ChannelCategoryScalarWhereInputObjectSchema), z.lazy(() => ChannelCategoryScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  position: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  serverId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const ChannelCategoryScalarWhereInputObjectSchema: z.ZodType<Prisma.ChannelCategoryScalarWhereInput> = channelcategoryscalarwhereinputSchema as unknown as z.ZodType<Prisma.ChannelCategoryScalarWhereInput>;
export const ChannelCategoryScalarWhereInputObjectZodSchema = channelcategoryscalarwhereinputSchema;
