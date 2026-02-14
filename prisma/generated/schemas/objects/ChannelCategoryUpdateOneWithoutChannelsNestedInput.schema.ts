import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ChannelCategoryCreateWithoutChannelsInputObjectSchema as ChannelCategoryCreateWithoutChannelsInputObjectSchema } from './ChannelCategoryCreateWithoutChannelsInput.schema';
import { ChannelCategoryUncheckedCreateWithoutChannelsInputObjectSchema as ChannelCategoryUncheckedCreateWithoutChannelsInputObjectSchema } from './ChannelCategoryUncheckedCreateWithoutChannelsInput.schema';
import { ChannelCategoryCreateOrConnectWithoutChannelsInputObjectSchema as ChannelCategoryCreateOrConnectWithoutChannelsInputObjectSchema } from './ChannelCategoryCreateOrConnectWithoutChannelsInput.schema';
import { ChannelCategoryUpsertWithoutChannelsInputObjectSchema as ChannelCategoryUpsertWithoutChannelsInputObjectSchema } from './ChannelCategoryUpsertWithoutChannelsInput.schema';
import { ChannelCategoryWhereInputObjectSchema as ChannelCategoryWhereInputObjectSchema } from './ChannelCategoryWhereInput.schema';
import { ChannelCategoryWhereUniqueInputObjectSchema as ChannelCategoryWhereUniqueInputObjectSchema } from './ChannelCategoryWhereUniqueInput.schema';
import { ChannelCategoryUpdateToOneWithWhereWithoutChannelsInputObjectSchema as ChannelCategoryUpdateToOneWithWhereWithoutChannelsInputObjectSchema } from './ChannelCategoryUpdateToOneWithWhereWithoutChannelsInput.schema';
import { ChannelCategoryUpdateWithoutChannelsInputObjectSchema as ChannelCategoryUpdateWithoutChannelsInputObjectSchema } from './ChannelCategoryUpdateWithoutChannelsInput.schema';
import { ChannelCategoryUncheckedUpdateWithoutChannelsInputObjectSchema as ChannelCategoryUncheckedUpdateWithoutChannelsInputObjectSchema } from './ChannelCategoryUncheckedUpdateWithoutChannelsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ChannelCategoryCreateWithoutChannelsInputObjectSchema), z.lazy(() => ChannelCategoryUncheckedCreateWithoutChannelsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ChannelCategoryCreateOrConnectWithoutChannelsInputObjectSchema).optional(),
  upsert: z.lazy(() => ChannelCategoryUpsertWithoutChannelsInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => ChannelCategoryWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => ChannelCategoryWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => ChannelCategoryWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ChannelCategoryUpdateToOneWithWhereWithoutChannelsInputObjectSchema), z.lazy(() => ChannelCategoryUpdateWithoutChannelsInputObjectSchema), z.lazy(() => ChannelCategoryUncheckedUpdateWithoutChannelsInputObjectSchema)]).optional()
}).strict();
export const ChannelCategoryUpdateOneWithoutChannelsNestedInputObjectSchema: z.ZodType<Prisma.ChannelCategoryUpdateOneWithoutChannelsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ChannelCategoryUpdateOneWithoutChannelsNestedInput>;
export const ChannelCategoryUpdateOneWithoutChannelsNestedInputObjectZodSchema = makeSchema();
