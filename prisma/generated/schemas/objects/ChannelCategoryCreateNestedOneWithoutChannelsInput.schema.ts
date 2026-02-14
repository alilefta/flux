import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ChannelCategoryCreateWithoutChannelsInputObjectSchema as ChannelCategoryCreateWithoutChannelsInputObjectSchema } from './ChannelCategoryCreateWithoutChannelsInput.schema';
import { ChannelCategoryUncheckedCreateWithoutChannelsInputObjectSchema as ChannelCategoryUncheckedCreateWithoutChannelsInputObjectSchema } from './ChannelCategoryUncheckedCreateWithoutChannelsInput.schema';
import { ChannelCategoryCreateOrConnectWithoutChannelsInputObjectSchema as ChannelCategoryCreateOrConnectWithoutChannelsInputObjectSchema } from './ChannelCategoryCreateOrConnectWithoutChannelsInput.schema';
import { ChannelCategoryWhereUniqueInputObjectSchema as ChannelCategoryWhereUniqueInputObjectSchema } from './ChannelCategoryWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ChannelCategoryCreateWithoutChannelsInputObjectSchema), z.lazy(() => ChannelCategoryUncheckedCreateWithoutChannelsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ChannelCategoryCreateOrConnectWithoutChannelsInputObjectSchema).optional(),
  connect: z.lazy(() => ChannelCategoryWhereUniqueInputObjectSchema).optional()
}).strict();
export const ChannelCategoryCreateNestedOneWithoutChannelsInputObjectSchema: z.ZodType<Prisma.ChannelCategoryCreateNestedOneWithoutChannelsInput> = makeSchema() as unknown as z.ZodType<Prisma.ChannelCategoryCreateNestedOneWithoutChannelsInput>;
export const ChannelCategoryCreateNestedOneWithoutChannelsInputObjectZodSchema = makeSchema();
