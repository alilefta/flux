import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ChannelCategoryWhereUniqueInputObjectSchema as ChannelCategoryWhereUniqueInputObjectSchema } from './ChannelCategoryWhereUniqueInput.schema';
import { ChannelCategoryCreateWithoutChannelsInputObjectSchema as ChannelCategoryCreateWithoutChannelsInputObjectSchema } from './ChannelCategoryCreateWithoutChannelsInput.schema';
import { ChannelCategoryUncheckedCreateWithoutChannelsInputObjectSchema as ChannelCategoryUncheckedCreateWithoutChannelsInputObjectSchema } from './ChannelCategoryUncheckedCreateWithoutChannelsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ChannelCategoryWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ChannelCategoryCreateWithoutChannelsInputObjectSchema), z.lazy(() => ChannelCategoryUncheckedCreateWithoutChannelsInputObjectSchema)])
}).strict();
export const ChannelCategoryCreateOrConnectWithoutChannelsInputObjectSchema: z.ZodType<Prisma.ChannelCategoryCreateOrConnectWithoutChannelsInput> = makeSchema() as unknown as z.ZodType<Prisma.ChannelCategoryCreateOrConnectWithoutChannelsInput>;
export const ChannelCategoryCreateOrConnectWithoutChannelsInputObjectZodSchema = makeSchema();
