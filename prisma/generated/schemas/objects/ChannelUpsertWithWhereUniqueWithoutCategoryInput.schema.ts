import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ChannelWhereUniqueInputObjectSchema as ChannelWhereUniqueInputObjectSchema } from './ChannelWhereUniqueInput.schema';
import { ChannelUpdateWithoutCategoryInputObjectSchema as ChannelUpdateWithoutCategoryInputObjectSchema } from './ChannelUpdateWithoutCategoryInput.schema';
import { ChannelUncheckedUpdateWithoutCategoryInputObjectSchema as ChannelUncheckedUpdateWithoutCategoryInputObjectSchema } from './ChannelUncheckedUpdateWithoutCategoryInput.schema';
import { ChannelCreateWithoutCategoryInputObjectSchema as ChannelCreateWithoutCategoryInputObjectSchema } from './ChannelCreateWithoutCategoryInput.schema';
import { ChannelUncheckedCreateWithoutCategoryInputObjectSchema as ChannelUncheckedCreateWithoutCategoryInputObjectSchema } from './ChannelUncheckedCreateWithoutCategoryInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ChannelWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ChannelUpdateWithoutCategoryInputObjectSchema), z.lazy(() => ChannelUncheckedUpdateWithoutCategoryInputObjectSchema)]),
  create: z.union([z.lazy(() => ChannelCreateWithoutCategoryInputObjectSchema), z.lazy(() => ChannelUncheckedCreateWithoutCategoryInputObjectSchema)])
}).strict();
export const ChannelUpsertWithWhereUniqueWithoutCategoryInputObjectSchema: z.ZodType<Prisma.ChannelUpsertWithWhereUniqueWithoutCategoryInput> = makeSchema() as unknown as z.ZodType<Prisma.ChannelUpsertWithWhereUniqueWithoutCategoryInput>;
export const ChannelUpsertWithWhereUniqueWithoutCategoryInputObjectZodSchema = makeSchema();
