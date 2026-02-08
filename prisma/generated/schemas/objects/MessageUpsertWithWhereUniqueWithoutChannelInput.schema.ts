import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MessageWhereUniqueInputObjectSchema as MessageWhereUniqueInputObjectSchema } from './MessageWhereUniqueInput.schema';
import { MessageUpdateWithoutChannelInputObjectSchema as MessageUpdateWithoutChannelInputObjectSchema } from './MessageUpdateWithoutChannelInput.schema';
import { MessageUncheckedUpdateWithoutChannelInputObjectSchema as MessageUncheckedUpdateWithoutChannelInputObjectSchema } from './MessageUncheckedUpdateWithoutChannelInput.schema';
import { MessageCreateWithoutChannelInputObjectSchema as MessageCreateWithoutChannelInputObjectSchema } from './MessageCreateWithoutChannelInput.schema';
import { MessageUncheckedCreateWithoutChannelInputObjectSchema as MessageUncheckedCreateWithoutChannelInputObjectSchema } from './MessageUncheckedCreateWithoutChannelInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MessageWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => MessageUpdateWithoutChannelInputObjectSchema), z.lazy(() => MessageUncheckedUpdateWithoutChannelInputObjectSchema)]),
  create: z.union([z.lazy(() => MessageCreateWithoutChannelInputObjectSchema), z.lazy(() => MessageUncheckedCreateWithoutChannelInputObjectSchema)])
}).strict();
export const MessageUpsertWithWhereUniqueWithoutChannelInputObjectSchema: z.ZodType<Prisma.MessageUpsertWithWhereUniqueWithoutChannelInput> = makeSchema() as unknown as z.ZodType<Prisma.MessageUpsertWithWhereUniqueWithoutChannelInput>;
export const MessageUpsertWithWhereUniqueWithoutChannelInputObjectZodSchema = makeSchema();
