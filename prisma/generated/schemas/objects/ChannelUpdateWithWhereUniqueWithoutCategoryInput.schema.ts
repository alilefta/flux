import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ChannelWhereUniqueInputObjectSchema as ChannelWhereUniqueInputObjectSchema } from './ChannelWhereUniqueInput.schema';
import { ChannelUpdateWithoutCategoryInputObjectSchema as ChannelUpdateWithoutCategoryInputObjectSchema } from './ChannelUpdateWithoutCategoryInput.schema';
import { ChannelUncheckedUpdateWithoutCategoryInputObjectSchema as ChannelUncheckedUpdateWithoutCategoryInputObjectSchema } from './ChannelUncheckedUpdateWithoutCategoryInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ChannelWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ChannelUpdateWithoutCategoryInputObjectSchema), z.lazy(() => ChannelUncheckedUpdateWithoutCategoryInputObjectSchema)])
}).strict();
export const ChannelUpdateWithWhereUniqueWithoutCategoryInputObjectSchema: z.ZodType<Prisma.ChannelUpdateWithWhereUniqueWithoutCategoryInput> = makeSchema() as unknown as z.ZodType<Prisma.ChannelUpdateWithWhereUniqueWithoutCategoryInput>;
export const ChannelUpdateWithWhereUniqueWithoutCategoryInputObjectZodSchema = makeSchema();
