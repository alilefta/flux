import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { DirectMessageWhereInputObjectSchema as DirectMessageWhereInputObjectSchema } from './DirectMessageWhereInput.schema';
import { DirectMessageUpdateWithoutAttachmentsInputObjectSchema as DirectMessageUpdateWithoutAttachmentsInputObjectSchema } from './DirectMessageUpdateWithoutAttachmentsInput.schema';
import { DirectMessageUncheckedUpdateWithoutAttachmentsInputObjectSchema as DirectMessageUncheckedUpdateWithoutAttachmentsInputObjectSchema } from './DirectMessageUncheckedUpdateWithoutAttachmentsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DirectMessageWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => DirectMessageUpdateWithoutAttachmentsInputObjectSchema), z.lazy(() => DirectMessageUncheckedUpdateWithoutAttachmentsInputObjectSchema)])
}).strict();
export const DirectMessageUpdateToOneWithWhereWithoutAttachmentsInputObjectSchema: z.ZodType<Prisma.DirectMessageUpdateToOneWithWhereWithoutAttachmentsInput> = makeSchema() as unknown as z.ZodType<Prisma.DirectMessageUpdateToOneWithWhereWithoutAttachmentsInput>;
export const DirectMessageUpdateToOneWithWhereWithoutAttachmentsInputObjectZodSchema = makeSchema();
