import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MessageCreateWithoutAttachmentsInputObjectSchema as MessageCreateWithoutAttachmentsInputObjectSchema } from './MessageCreateWithoutAttachmentsInput.schema';
import { MessageUncheckedCreateWithoutAttachmentsInputObjectSchema as MessageUncheckedCreateWithoutAttachmentsInputObjectSchema } from './MessageUncheckedCreateWithoutAttachmentsInput.schema';
import { MessageCreateOrConnectWithoutAttachmentsInputObjectSchema as MessageCreateOrConnectWithoutAttachmentsInputObjectSchema } from './MessageCreateOrConnectWithoutAttachmentsInput.schema';
import { MessageWhereUniqueInputObjectSchema as MessageWhereUniqueInputObjectSchema } from './MessageWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => MessageCreateWithoutAttachmentsInputObjectSchema), z.lazy(() => MessageUncheckedCreateWithoutAttachmentsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => MessageCreateOrConnectWithoutAttachmentsInputObjectSchema).optional(),
  connect: z.lazy(() => MessageWhereUniqueInputObjectSchema).optional()
}).strict();
export const MessageCreateNestedOneWithoutAttachmentsInputObjectSchema: z.ZodType<Prisma.MessageCreateNestedOneWithoutAttachmentsInput> = makeSchema() as unknown as z.ZodType<Prisma.MessageCreateNestedOneWithoutAttachmentsInput>;
export const MessageCreateNestedOneWithoutAttachmentsInputObjectZodSchema = makeSchema();
