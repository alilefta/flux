import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ChannelCategoryWhereUniqueInputObjectSchema as ChannelCategoryWhereUniqueInputObjectSchema } from './ChannelCategoryWhereUniqueInput.schema';
import { ChannelCategoryUpdateWithoutServerInputObjectSchema as ChannelCategoryUpdateWithoutServerInputObjectSchema } from './ChannelCategoryUpdateWithoutServerInput.schema';
import { ChannelCategoryUncheckedUpdateWithoutServerInputObjectSchema as ChannelCategoryUncheckedUpdateWithoutServerInputObjectSchema } from './ChannelCategoryUncheckedUpdateWithoutServerInput.schema';
import { ChannelCategoryCreateWithoutServerInputObjectSchema as ChannelCategoryCreateWithoutServerInputObjectSchema } from './ChannelCategoryCreateWithoutServerInput.schema';
import { ChannelCategoryUncheckedCreateWithoutServerInputObjectSchema as ChannelCategoryUncheckedCreateWithoutServerInputObjectSchema } from './ChannelCategoryUncheckedCreateWithoutServerInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ChannelCategoryWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ChannelCategoryUpdateWithoutServerInputObjectSchema), z.lazy(() => ChannelCategoryUncheckedUpdateWithoutServerInputObjectSchema)]),
  create: z.union([z.lazy(() => ChannelCategoryCreateWithoutServerInputObjectSchema), z.lazy(() => ChannelCategoryUncheckedCreateWithoutServerInputObjectSchema)])
}).strict();
export const ChannelCategoryUpsertWithWhereUniqueWithoutServerInputObjectSchema: z.ZodType<Prisma.ChannelCategoryUpsertWithWhereUniqueWithoutServerInput> = makeSchema() as unknown as z.ZodType<Prisma.ChannelCategoryUpsertWithWhereUniqueWithoutServerInput>;
export const ChannelCategoryUpsertWithWhereUniqueWithoutServerInputObjectZodSchema = makeSchema();
