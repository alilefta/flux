import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MessageWhereUniqueInputObjectSchema as MessageWhereUniqueInputObjectSchema } from './MessageWhereUniqueInput.schema';
import { MessageCreateWithoutAttachmentsInputObjectSchema as MessageCreateWithoutAttachmentsInputObjectSchema } from './MessageCreateWithoutAttachmentsInput.schema';
import { MessageUncheckedCreateWithoutAttachmentsInputObjectSchema as MessageUncheckedCreateWithoutAttachmentsInputObjectSchema } from './MessageUncheckedCreateWithoutAttachmentsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MessageWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => MessageCreateWithoutAttachmentsInputObjectSchema), z.lazy(() => MessageUncheckedCreateWithoutAttachmentsInputObjectSchema)])
}).strict();
export const MessageCreateOrConnectWithoutAttachmentsInputObjectSchema: z.ZodType<Prisma.MessageCreateOrConnectWithoutAttachmentsInput> = makeSchema() as unknown as z.ZodType<Prisma.MessageCreateOrConnectWithoutAttachmentsInput>;
export const MessageCreateOrConnectWithoutAttachmentsInputObjectZodSchema = makeSchema();
