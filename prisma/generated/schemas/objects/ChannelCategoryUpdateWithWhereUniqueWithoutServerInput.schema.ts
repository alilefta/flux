import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ChannelCategoryWhereUniqueInputObjectSchema as ChannelCategoryWhereUniqueInputObjectSchema } from './ChannelCategoryWhereUniqueInput.schema';
import { ChannelCategoryUpdateWithoutServerInputObjectSchema as ChannelCategoryUpdateWithoutServerInputObjectSchema } from './ChannelCategoryUpdateWithoutServerInput.schema';
import { ChannelCategoryUncheckedUpdateWithoutServerInputObjectSchema as ChannelCategoryUncheckedUpdateWithoutServerInputObjectSchema } from './ChannelCategoryUncheckedUpdateWithoutServerInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ChannelCategoryWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ChannelCategoryUpdateWithoutServerInputObjectSchema), z.lazy(() => ChannelCategoryUncheckedUpdateWithoutServerInputObjectSchema)])
}).strict();
export const ChannelCategoryUpdateWithWhereUniqueWithoutServerInputObjectSchema: z.ZodType<Prisma.ChannelCategoryUpdateWithWhereUniqueWithoutServerInput> = makeSchema() as unknown as z.ZodType<Prisma.ChannelCategoryUpdateWithWhereUniqueWithoutServerInput>;
export const ChannelCategoryUpdateWithWhereUniqueWithoutServerInputObjectZodSchema = makeSchema();
