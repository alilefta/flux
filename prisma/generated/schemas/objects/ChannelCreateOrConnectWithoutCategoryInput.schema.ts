import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ChannelWhereUniqueInputObjectSchema as ChannelWhereUniqueInputObjectSchema } from './ChannelWhereUniqueInput.schema';
import { ChannelCreateWithoutCategoryInputObjectSchema as ChannelCreateWithoutCategoryInputObjectSchema } from './ChannelCreateWithoutCategoryInput.schema';
import { ChannelUncheckedCreateWithoutCategoryInputObjectSchema as ChannelUncheckedCreateWithoutCategoryInputObjectSchema } from './ChannelUncheckedCreateWithoutCategoryInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ChannelWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ChannelCreateWithoutCategoryInputObjectSchema), z.lazy(() => ChannelUncheckedCreateWithoutCategoryInputObjectSchema)])
}).strict();
export const ChannelCreateOrConnectWithoutCategoryInputObjectSchema: z.ZodType<Prisma.ChannelCreateOrConnectWithoutCategoryInput> = makeSchema() as unknown as z.ZodType<Prisma.ChannelCreateOrConnectWithoutCategoryInput>;
export const ChannelCreateOrConnectWithoutCategoryInputObjectZodSchema = makeSchema();
