import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ChannelWhereUniqueInputObjectSchema as ChannelWhereUniqueInputObjectSchema } from './ChannelWhereUniqueInput.schema';
import { ChannelUpdateWithoutServerInputObjectSchema as ChannelUpdateWithoutServerInputObjectSchema } from './ChannelUpdateWithoutServerInput.schema';
import { ChannelUncheckedUpdateWithoutServerInputObjectSchema as ChannelUncheckedUpdateWithoutServerInputObjectSchema } from './ChannelUncheckedUpdateWithoutServerInput.schema';
import { ChannelCreateWithoutServerInputObjectSchema as ChannelCreateWithoutServerInputObjectSchema } from './ChannelCreateWithoutServerInput.schema';
import { ChannelUncheckedCreateWithoutServerInputObjectSchema as ChannelUncheckedCreateWithoutServerInputObjectSchema } from './ChannelUncheckedCreateWithoutServerInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ChannelWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ChannelUpdateWithoutServerInputObjectSchema), z.lazy(() => ChannelUncheckedUpdateWithoutServerInputObjectSchema)]),
  create: z.union([z.lazy(() => ChannelCreateWithoutServerInputObjectSchema), z.lazy(() => ChannelUncheckedCreateWithoutServerInputObjectSchema)])
}).strict();
export const ChannelUpsertWithWhereUniqueWithoutServerInputObjectSchema: z.ZodType<Prisma.ChannelUpsertWithWhereUniqueWithoutServerInput> = makeSchema() as unknown as z.ZodType<Prisma.ChannelUpsertWithWhereUniqueWithoutServerInput>;
export const ChannelUpsertWithWhereUniqueWithoutServerInputObjectZodSchema = makeSchema();
