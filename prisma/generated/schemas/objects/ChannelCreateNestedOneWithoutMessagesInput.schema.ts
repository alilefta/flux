import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ChannelCreateWithoutMessagesInputObjectSchema as ChannelCreateWithoutMessagesInputObjectSchema } from './ChannelCreateWithoutMessagesInput.schema';
import { ChannelUncheckedCreateWithoutMessagesInputObjectSchema as ChannelUncheckedCreateWithoutMessagesInputObjectSchema } from './ChannelUncheckedCreateWithoutMessagesInput.schema';
import { ChannelCreateOrConnectWithoutMessagesInputObjectSchema as ChannelCreateOrConnectWithoutMessagesInputObjectSchema } from './ChannelCreateOrConnectWithoutMessagesInput.schema';
import { ChannelWhereUniqueInputObjectSchema as ChannelWhereUniqueInputObjectSchema } from './ChannelWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ChannelCreateWithoutMessagesInputObjectSchema), z.lazy(() => ChannelUncheckedCreateWithoutMessagesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ChannelCreateOrConnectWithoutMessagesInputObjectSchema).optional(),
  connect: z.lazy(() => ChannelWhereUniqueInputObjectSchema).optional()
}).strict();
export const ChannelCreateNestedOneWithoutMessagesInputObjectSchema: z.ZodType<Prisma.ChannelCreateNestedOneWithoutMessagesInput> = makeSchema() as unknown as z.ZodType<Prisma.ChannelCreateNestedOneWithoutMessagesInput>;
export const ChannelCreateNestedOneWithoutMessagesInputObjectZodSchema = makeSchema();
