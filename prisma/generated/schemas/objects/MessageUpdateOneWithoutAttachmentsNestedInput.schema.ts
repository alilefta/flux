import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MessageCreateWithoutAttachmentsInputObjectSchema as MessageCreateWithoutAttachmentsInputObjectSchema } from './MessageCreateWithoutAttachmentsInput.schema';
import { MessageUncheckedCreateWithoutAttachmentsInputObjectSchema as MessageUncheckedCreateWithoutAttachmentsInputObjectSchema } from './MessageUncheckedCreateWithoutAttachmentsInput.schema';
import { MessageCreateOrConnectWithoutAttachmentsInputObjectSchema as MessageCreateOrConnectWithoutAttachmentsInputObjectSchema } from './MessageCreateOrConnectWithoutAttachmentsInput.schema';
import { MessageUpsertWithoutAttachmentsInputObjectSchema as MessageUpsertWithoutAttachmentsInputObjectSchema } from './MessageUpsertWithoutAttachmentsInput.schema';
import { MessageWhereInputObjectSchema as MessageWhereInputObjectSchema } from './MessageWhereInput.schema';
import { MessageWhereUniqueInputObjectSchema as MessageWhereUniqueInputObjectSchema } from './MessageWhereUniqueInput.schema';
import { MessageUpdateToOneWithWhereWithoutAttachmentsInputObjectSchema as MessageUpdateToOneWithWhereWithoutAttachmentsInputObjectSchema } from './MessageUpdateToOneWithWhereWithoutAttachmentsInput.schema';
import { MessageUpdateWithoutAttachmentsInputObjectSchema as MessageUpdateWithoutAttachmentsInputObjectSchema } from './MessageUpdateWithoutAttachmentsInput.schema';
import { MessageUncheckedUpdateWithoutAttachmentsInputObjectSchema as MessageUncheckedUpdateWithoutAttachmentsInputObjectSchema } from './MessageUncheckedUpdateWithoutAttachmentsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => MessageCreateWithoutAttachmentsInputObjectSchema), z.lazy(() => MessageUncheckedCreateWithoutAttachmentsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => MessageCreateOrConnectWithoutAttachmentsInputObjectSchema).optional(),
  upsert: z.lazy(() => MessageUpsertWithoutAttachmentsInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => MessageWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => MessageWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => MessageWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => MessageUpdateToOneWithWhereWithoutAttachmentsInputObjectSchema), z.lazy(() => MessageUpdateWithoutAttachmentsInputObjectSchema), z.lazy(() => MessageUncheckedUpdateWithoutAttachmentsInputObjectSchema)]).optional()
}).strict();
export const MessageUpdateOneWithoutAttachmentsNestedInputObjectSchema: z.ZodType<Prisma.MessageUpdateOneWithoutAttachmentsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.MessageUpdateOneWithoutAttachmentsNestedInput>;
export const MessageUpdateOneWithoutAttachmentsNestedInputObjectZodSchema = makeSchema();
