import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ChannelCategoryWhereInputObjectSchema as ChannelCategoryWhereInputObjectSchema } from './ChannelCategoryWhereInput.schema';
import { ChannelCategoryUpdateWithoutChannelsInputObjectSchema as ChannelCategoryUpdateWithoutChannelsInputObjectSchema } from './ChannelCategoryUpdateWithoutChannelsInput.schema';
import { ChannelCategoryUncheckedUpdateWithoutChannelsInputObjectSchema as ChannelCategoryUncheckedUpdateWithoutChannelsInputObjectSchema } from './ChannelCategoryUncheckedUpdateWithoutChannelsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ChannelCategoryWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ChannelCategoryUpdateWithoutChannelsInputObjectSchema), z.lazy(() => ChannelCategoryUncheckedUpdateWithoutChannelsInputObjectSchema)])
}).strict();
export const ChannelCategoryUpdateToOneWithWhereWithoutChannelsInputObjectSchema: z.ZodType<Prisma.ChannelCategoryUpdateToOneWithWhereWithoutChannelsInput> = makeSchema() as unknown as z.ZodType<Prisma.ChannelCategoryUpdateToOneWithWhereWithoutChannelsInput>;
export const ChannelCategoryUpdateToOneWithWhereWithoutChannelsInputObjectZodSchema = makeSchema();
