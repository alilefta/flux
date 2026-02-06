import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ChannelWhereUniqueInputObjectSchema as ChannelWhereUniqueInputObjectSchema } from './ChannelWhereUniqueInput.schema';
import { ChannelCreateWithoutProfileInputObjectSchema as ChannelCreateWithoutProfileInputObjectSchema } from './ChannelCreateWithoutProfileInput.schema';
import { ChannelUncheckedCreateWithoutProfileInputObjectSchema as ChannelUncheckedCreateWithoutProfileInputObjectSchema } from './ChannelUncheckedCreateWithoutProfileInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ChannelWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ChannelCreateWithoutProfileInputObjectSchema), z.lazy(() => ChannelUncheckedCreateWithoutProfileInputObjectSchema)])
}).strict();
export const ChannelCreateOrConnectWithoutProfileInputObjectSchema: z.ZodType<Prisma.ChannelCreateOrConnectWithoutProfileInput> = makeSchema() as unknown as z.ZodType<Prisma.ChannelCreateOrConnectWithoutProfileInput>;
export const ChannelCreateOrConnectWithoutProfileInputObjectZodSchema = makeSchema();
