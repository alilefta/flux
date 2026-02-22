import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { DirectMessageUpdateWithoutAttachmentsInputObjectSchema as DirectMessageUpdateWithoutAttachmentsInputObjectSchema } from './DirectMessageUpdateWithoutAttachmentsInput.schema';
import { DirectMessageUncheckedUpdateWithoutAttachmentsInputObjectSchema as DirectMessageUncheckedUpdateWithoutAttachmentsInputObjectSchema } from './DirectMessageUncheckedUpdateWithoutAttachmentsInput.schema';
import { DirectMessageCreateWithoutAttachmentsInputObjectSchema as DirectMessageCreateWithoutAttachmentsInputObjectSchema } from './DirectMessageCreateWithoutAttachmentsInput.schema';
import { DirectMessageUncheckedCreateWithoutAttachmentsInputObjectSchema as DirectMessageUncheckedCreateWithoutAttachmentsInputObjectSchema } from './DirectMessageUncheckedCreateWithoutAttachmentsInput.schema';
import { DirectMessageWhereInputObjectSchema as DirectMessageWhereInputObjectSchema } from './DirectMessageWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => DirectMessageUpdateWithoutAttachmentsInputObjectSchema), z.lazy(() => DirectMessageUncheckedUpdateWithoutAttachmentsInputObjectSchema)]),
  create: z.union([z.lazy(() => DirectMessageCreateWithoutAttachmentsInputObjectSchema), z.lazy(() => DirectMessageUncheckedCreateWithoutAttachmentsInputObjectSchema)]),
  where: z.lazy(() => DirectMessageWhereInputObjectSchema).optional()
}).strict();
export const DirectMessageUpsertWithoutAttachmentsInputObjectSchema: z.ZodType<Prisma.DirectMessageUpsertWithoutAttachmentsInput> = makeSchema() as unknown as z.ZodType<Prisma.DirectMessageUpsertWithoutAttachmentsInput>;
export const DirectMessageUpsertWithoutAttachmentsInputObjectZodSchema = makeSchema();
