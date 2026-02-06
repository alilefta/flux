import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MessageWhereUniqueInputObjectSchema as MessageWhereUniqueInputObjectSchema } from './MessageWhereUniqueInput.schema';
import { MessageCreateWithoutChannelInputObjectSchema as MessageCreateWithoutChannelInputObjectSchema } from './MessageCreateWithoutChannelInput.schema';
import { MessageUncheckedCreateWithoutChannelInputObjectSchema as MessageUncheckedCreateWithoutChannelInputObjectSchema } from './MessageUncheckedCreateWithoutChannelInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MessageWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => MessageCreateWithoutChannelInputObjectSchema), z.lazy(() => MessageUncheckedCreateWithoutChannelInputObjectSchema)])
}).strict();
export const MessageCreateOrConnectWithoutChannelInputObjectSchema: z.ZodType<Prisma.MessageCreateOrConnectWithoutChannelInput> = makeSchema() as unknown as z.ZodType<Prisma.MessageCreateOrConnectWithoutChannelInput>;
export const MessageCreateOrConnectWithoutChannelInputObjectZodSchema = makeSchema();
