import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ChannelWhereUniqueInputObjectSchema as ChannelWhereUniqueInputObjectSchema } from './ChannelWhereUniqueInput.schema';
import { ChannelCreateWithoutMessagesInputObjectSchema as ChannelCreateWithoutMessagesInputObjectSchema } from './ChannelCreateWithoutMessagesInput.schema';
import { ChannelUncheckedCreateWithoutMessagesInputObjectSchema as ChannelUncheckedCreateWithoutMessagesInputObjectSchema } from './ChannelUncheckedCreateWithoutMessagesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ChannelWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ChannelCreateWithoutMessagesInputObjectSchema), z.lazy(() => ChannelUncheckedCreateWithoutMessagesInputObjectSchema)])
}).strict();
export const ChannelCreateOrConnectWithoutMessagesInputObjectSchema: z.ZodType<Prisma.ChannelCreateOrConnectWithoutMessagesInput> = makeSchema() as unknown as z.ZodType<Prisma.ChannelCreateOrConnectWithoutMessagesInput>;
export const ChannelCreateOrConnectWithoutMessagesInputObjectZodSchema = makeSchema();
