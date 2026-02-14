import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MessageWhereInputObjectSchema as MessageWhereInputObjectSchema } from './MessageWhereInput.schema';
import { MessageUpdateWithoutAttachmentsInputObjectSchema as MessageUpdateWithoutAttachmentsInputObjectSchema } from './MessageUpdateWithoutAttachmentsInput.schema';
import { MessageUncheckedUpdateWithoutAttachmentsInputObjectSchema as MessageUncheckedUpdateWithoutAttachmentsInputObjectSchema } from './MessageUncheckedUpdateWithoutAttachmentsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MessageWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => MessageUpdateWithoutAttachmentsInputObjectSchema), z.lazy(() => MessageUncheckedUpdateWithoutAttachmentsInputObjectSchema)])
}).strict();
export const MessageUpdateToOneWithWhereWithoutAttachmentsInputObjectSchema: z.ZodType<Prisma.MessageUpdateToOneWithWhereWithoutAttachmentsInput> = makeSchema() as unknown as z.ZodType<Prisma.MessageUpdateToOneWithWhereWithoutAttachmentsInput>;
export const MessageUpdateToOneWithWhereWithoutAttachmentsInputObjectZodSchema = makeSchema();
