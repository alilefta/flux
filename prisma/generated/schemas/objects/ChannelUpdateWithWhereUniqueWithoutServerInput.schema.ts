import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ChannelWhereUniqueInputObjectSchema as ChannelWhereUniqueInputObjectSchema } from './ChannelWhereUniqueInput.schema';
import { ChannelUpdateWithoutServerInputObjectSchema as ChannelUpdateWithoutServerInputObjectSchema } from './ChannelUpdateWithoutServerInput.schema';
import { ChannelUncheckedUpdateWithoutServerInputObjectSchema as ChannelUncheckedUpdateWithoutServerInputObjectSchema } from './ChannelUncheckedUpdateWithoutServerInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ChannelWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ChannelUpdateWithoutServerInputObjectSchema), z.lazy(() => ChannelUncheckedUpdateWithoutServerInputObjectSchema)])
}).strict();
export const ChannelUpdateWithWhereUniqueWithoutServerInputObjectSchema: z.ZodType<Prisma.ChannelUpdateWithWhereUniqueWithoutServerInput> = makeSchema() as unknown as z.ZodType<Prisma.ChannelUpdateWithWhereUniqueWithoutServerInput>;
export const ChannelUpdateWithWhereUniqueWithoutServerInputObjectZodSchema = makeSchema();
