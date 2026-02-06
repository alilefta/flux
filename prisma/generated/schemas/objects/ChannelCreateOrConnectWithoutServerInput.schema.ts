import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ChannelWhereUniqueInputObjectSchema as ChannelWhereUniqueInputObjectSchema } from './ChannelWhereUniqueInput.schema';
import { ChannelCreateWithoutServerInputObjectSchema as ChannelCreateWithoutServerInputObjectSchema } from './ChannelCreateWithoutServerInput.schema';
import { ChannelUncheckedCreateWithoutServerInputObjectSchema as ChannelUncheckedCreateWithoutServerInputObjectSchema } from './ChannelUncheckedCreateWithoutServerInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ChannelWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ChannelCreateWithoutServerInputObjectSchema), z.lazy(() => ChannelUncheckedCreateWithoutServerInputObjectSchema)])
}).strict();
export const ChannelCreateOrConnectWithoutServerInputObjectSchema: z.ZodType<Prisma.ChannelCreateOrConnectWithoutServerInput> = makeSchema() as unknown as z.ZodType<Prisma.ChannelCreateOrConnectWithoutServerInput>;
export const ChannelCreateOrConnectWithoutServerInputObjectZodSchema = makeSchema();
