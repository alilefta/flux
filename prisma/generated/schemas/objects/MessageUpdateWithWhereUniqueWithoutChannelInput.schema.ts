import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MessageWhereUniqueInputObjectSchema as MessageWhereUniqueInputObjectSchema } from './MessageWhereUniqueInput.schema';
import { MessageUpdateWithoutChannelInputObjectSchema as MessageUpdateWithoutChannelInputObjectSchema } from './MessageUpdateWithoutChannelInput.schema';
import { MessageUncheckedUpdateWithoutChannelInputObjectSchema as MessageUncheckedUpdateWithoutChannelInputObjectSchema } from './MessageUncheckedUpdateWithoutChannelInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MessageWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => MessageUpdateWithoutChannelInputObjectSchema), z.lazy(() => MessageUncheckedUpdateWithoutChannelInputObjectSchema)])
}).strict();
export const MessageUpdateWithWhereUniqueWithoutChannelInputObjectSchema: z.ZodType<Prisma.MessageUpdateWithWhereUniqueWithoutChannelInput> = makeSchema() as unknown as z.ZodType<Prisma.MessageUpdateWithWhereUniqueWithoutChannelInput>;
export const MessageUpdateWithWhereUniqueWithoutChannelInputObjectZodSchema = makeSchema();
