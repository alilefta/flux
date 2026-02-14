import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ChannelCategoryUpdateWithoutChannelsInputObjectSchema as ChannelCategoryUpdateWithoutChannelsInputObjectSchema } from './ChannelCategoryUpdateWithoutChannelsInput.schema';
import { ChannelCategoryUncheckedUpdateWithoutChannelsInputObjectSchema as ChannelCategoryUncheckedUpdateWithoutChannelsInputObjectSchema } from './ChannelCategoryUncheckedUpdateWithoutChannelsInput.schema';
import { ChannelCategoryCreateWithoutChannelsInputObjectSchema as ChannelCategoryCreateWithoutChannelsInputObjectSchema } from './ChannelCategoryCreateWithoutChannelsInput.schema';
import { ChannelCategoryUncheckedCreateWithoutChannelsInputObjectSchema as ChannelCategoryUncheckedCreateWithoutChannelsInputObjectSchema } from './ChannelCategoryUncheckedCreateWithoutChannelsInput.schema';
import { ChannelCategoryWhereInputObjectSchema as ChannelCategoryWhereInputObjectSchema } from './ChannelCategoryWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => ChannelCategoryUpdateWithoutChannelsInputObjectSchema), z.lazy(() => ChannelCategoryUncheckedUpdateWithoutChannelsInputObjectSchema)]),
  create: z.union([z.lazy(() => ChannelCategoryCreateWithoutChannelsInputObjectSchema), z.lazy(() => ChannelCategoryUncheckedCreateWithoutChannelsInputObjectSchema)]),
  where: z.lazy(() => ChannelCategoryWhereInputObjectSchema).optional()
}).strict();
export const ChannelCategoryUpsertWithoutChannelsInputObjectSchema: z.ZodType<Prisma.ChannelCategoryUpsertWithoutChannelsInput> = makeSchema() as unknown as z.ZodType<Prisma.ChannelCategoryUpsertWithoutChannelsInput>;
export const ChannelCategoryUpsertWithoutChannelsInputObjectZodSchema = makeSchema();
