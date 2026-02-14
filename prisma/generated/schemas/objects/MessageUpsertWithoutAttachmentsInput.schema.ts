import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MessageUpdateWithoutAttachmentsInputObjectSchema as MessageUpdateWithoutAttachmentsInputObjectSchema } from './MessageUpdateWithoutAttachmentsInput.schema';
import { MessageUncheckedUpdateWithoutAttachmentsInputObjectSchema as MessageUncheckedUpdateWithoutAttachmentsInputObjectSchema } from './MessageUncheckedUpdateWithoutAttachmentsInput.schema';
import { MessageCreateWithoutAttachmentsInputObjectSchema as MessageCreateWithoutAttachmentsInputObjectSchema } from './MessageCreateWithoutAttachmentsInput.schema';
import { MessageUncheckedCreateWithoutAttachmentsInputObjectSchema as MessageUncheckedCreateWithoutAttachmentsInputObjectSchema } from './MessageUncheckedCreateWithoutAttachmentsInput.schema';
import { MessageWhereInputObjectSchema as MessageWhereInputObjectSchema } from './MessageWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => MessageUpdateWithoutAttachmentsInputObjectSchema), z.lazy(() => MessageUncheckedUpdateWithoutAttachmentsInputObjectSchema)]),
  create: z.union([z.lazy(() => MessageCreateWithoutAttachmentsInputObjectSchema), z.lazy(() => MessageUncheckedCreateWithoutAttachmentsInputObjectSchema)]),
  where: z.lazy(() => MessageWhereInputObjectSchema).optional()
}).strict();
export const MessageUpsertWithoutAttachmentsInputObjectSchema: z.ZodType<Prisma.MessageUpsertWithoutAttachmentsInput> = makeSchema() as unknown as z.ZodType<Prisma.MessageUpsertWithoutAttachmentsInput>;
export const MessageUpsertWithoutAttachmentsInputObjectZodSchema = makeSchema();
