import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MessageCreateWithoutAttachmentsInputObjectSchema as MessageCreateWithoutAttachmentsInputObjectSchema } from './MessageCreateWithoutAttachmentsInput.schema';
import { MessageUncheckedCreateWithoutAttachmentsInputObjectSchema as MessageUncheckedCreateWithoutAttachmentsInputObjectSchema } from './MessageUncheckedCreateWithoutAttachmentsInput.schema';
import { MessageCreateOrConnectWithoutAttachmentsInputObjectSchema as MessageCreateOrConnectWithoutAttachmentsInputObjectSchema } from './MessageCreateOrConnectWithoutAttachmentsInput.schema';
import { MessageUpsertWithoutAttachmentsInputObjectSchema as MessageUpsertWithoutAttachmentsInputObjectSchema } from './MessageUpsertWithoutAttachmentsInput.schema';
import { MessageWhereUniqueInputObjectSchema as MessageWhereUniqueInputObjectSchema } from './MessageWhereUniqueInput.schema';
import { MessageUpdateToOneWithWhereWithoutAttachmentsInputObjectSchema as MessageUpdateToOneWithWhereWithoutAttachmentsInputObjectSchema } from './MessageUpdateToOneWithWhereWithoutAttachmentsInput.schema';
import { MessageUpdateWithoutAttachmentsInputObjectSchema as MessageUpdateWithoutAttachmentsInputObjectSchema } from './MessageUpdateWithoutAttachmentsInput.schema';
import { MessageUncheckedUpdateWithoutAttachmentsInputObjectSchema as MessageUncheckedUpdateWithoutAttachmentsInputObjectSchema } from './MessageUncheckedUpdateWithoutAttachmentsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => MessageCreateWithoutAttachmentsInputObjectSchema), z.lazy(() => MessageUncheckedCreateWithoutAttachmentsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => MessageCreateOrConnectWithoutAttachmentsInputObjectSchema).optional(),
  upsert: z.lazy(() => MessageUpsertWithoutAttachmentsInputObjectSchema).optional(),
  connect: z.lazy(() => MessageWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => MessageUpdateToOneWithWhereWithoutAttachmentsInputObjectSchema), z.lazy(() => MessageUpdateWithoutAttachmentsInputObjectSchema), z.lazy(() => MessageUncheckedUpdateWithoutAttachmentsInputObjectSchema)]).optional()
}).strict();
export const MessageUpdateOneRequiredWithoutAttachmentsNestedInputObjectSchema: z.ZodType<Prisma.MessageUpdateOneRequiredWithoutAttachmentsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.MessageUpdateOneRequiredWithoutAttachmentsNestedInput>;
export const MessageUpdateOneRequiredWithoutAttachmentsNestedInputObjectZodSchema = makeSchema();
