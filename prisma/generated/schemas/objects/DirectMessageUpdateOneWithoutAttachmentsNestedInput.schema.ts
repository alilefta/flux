import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { DirectMessageCreateWithoutAttachmentsInputObjectSchema as DirectMessageCreateWithoutAttachmentsInputObjectSchema } from './DirectMessageCreateWithoutAttachmentsInput.schema';
import { DirectMessageUncheckedCreateWithoutAttachmentsInputObjectSchema as DirectMessageUncheckedCreateWithoutAttachmentsInputObjectSchema } from './DirectMessageUncheckedCreateWithoutAttachmentsInput.schema';
import { DirectMessageCreateOrConnectWithoutAttachmentsInputObjectSchema as DirectMessageCreateOrConnectWithoutAttachmentsInputObjectSchema } from './DirectMessageCreateOrConnectWithoutAttachmentsInput.schema';
import { DirectMessageUpsertWithoutAttachmentsInputObjectSchema as DirectMessageUpsertWithoutAttachmentsInputObjectSchema } from './DirectMessageUpsertWithoutAttachmentsInput.schema';
import { DirectMessageWhereInputObjectSchema as DirectMessageWhereInputObjectSchema } from './DirectMessageWhereInput.schema';
import { DirectMessageWhereUniqueInputObjectSchema as DirectMessageWhereUniqueInputObjectSchema } from './DirectMessageWhereUniqueInput.schema';
import { DirectMessageUpdateToOneWithWhereWithoutAttachmentsInputObjectSchema as DirectMessageUpdateToOneWithWhereWithoutAttachmentsInputObjectSchema } from './DirectMessageUpdateToOneWithWhereWithoutAttachmentsInput.schema';
import { DirectMessageUpdateWithoutAttachmentsInputObjectSchema as DirectMessageUpdateWithoutAttachmentsInputObjectSchema } from './DirectMessageUpdateWithoutAttachmentsInput.schema';
import { DirectMessageUncheckedUpdateWithoutAttachmentsInputObjectSchema as DirectMessageUncheckedUpdateWithoutAttachmentsInputObjectSchema } from './DirectMessageUncheckedUpdateWithoutAttachmentsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => DirectMessageCreateWithoutAttachmentsInputObjectSchema), z.lazy(() => DirectMessageUncheckedCreateWithoutAttachmentsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => DirectMessageCreateOrConnectWithoutAttachmentsInputObjectSchema).optional(),
  upsert: z.lazy(() => DirectMessageUpsertWithoutAttachmentsInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => DirectMessageWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => DirectMessageWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => DirectMessageWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => DirectMessageUpdateToOneWithWhereWithoutAttachmentsInputObjectSchema), z.lazy(() => DirectMessageUpdateWithoutAttachmentsInputObjectSchema), z.lazy(() => DirectMessageUncheckedUpdateWithoutAttachmentsInputObjectSchema)]).optional()
}).strict();
export const DirectMessageUpdateOneWithoutAttachmentsNestedInputObjectSchema: z.ZodType<Prisma.DirectMessageUpdateOneWithoutAttachmentsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.DirectMessageUpdateOneWithoutAttachmentsNestedInput>;
export const DirectMessageUpdateOneWithoutAttachmentsNestedInputObjectZodSchema = makeSchema();
