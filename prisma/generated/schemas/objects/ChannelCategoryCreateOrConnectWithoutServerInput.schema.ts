import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ChannelCategoryWhereUniqueInputObjectSchema as ChannelCategoryWhereUniqueInputObjectSchema } from './ChannelCategoryWhereUniqueInput.schema';
import { ChannelCategoryCreateWithoutServerInputObjectSchema as ChannelCategoryCreateWithoutServerInputObjectSchema } from './ChannelCategoryCreateWithoutServerInput.schema';
import { ChannelCategoryUncheckedCreateWithoutServerInputObjectSchema as ChannelCategoryUncheckedCreateWithoutServerInputObjectSchema } from './ChannelCategoryUncheckedCreateWithoutServerInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ChannelCategoryWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ChannelCategoryCreateWithoutServerInputObjectSchema), z.lazy(() => ChannelCategoryUncheckedCreateWithoutServerInputObjectSchema)])
}).strict();
export const ChannelCategoryCreateOrConnectWithoutServerInputObjectSchema: z.ZodType<Prisma.ChannelCategoryCreateOrConnectWithoutServerInput> = makeSchema() as unknown as z.ZodType<Prisma.ChannelCategoryCreateOrConnectWithoutServerInput>;
export const ChannelCategoryCreateOrConnectWithoutServerInputObjectZodSchema = makeSchema();
