import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { DirectMessageCreateWithoutAttachmentsInputObjectSchema as DirectMessageCreateWithoutAttachmentsInputObjectSchema } from './DirectMessageCreateWithoutAttachmentsInput.schema';
import { DirectMessageUncheckedCreateWithoutAttachmentsInputObjectSchema as DirectMessageUncheckedCreateWithoutAttachmentsInputObjectSchema } from './DirectMessageUncheckedCreateWithoutAttachmentsInput.schema';
import { DirectMessageCreateOrConnectWithoutAttachmentsInputObjectSchema as DirectMessageCreateOrConnectWithoutAttachmentsInputObjectSchema } from './DirectMessageCreateOrConnectWithoutAttachmentsInput.schema';
import { DirectMessageWhereUniqueInputObjectSchema as DirectMessageWhereUniqueInputObjectSchema } from './DirectMessageWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => DirectMessageCreateWithoutAttachmentsInputObjectSchema), z.lazy(() => DirectMessageUncheckedCreateWithoutAttachmentsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => DirectMessageCreateOrConnectWithoutAttachmentsInputObjectSchema).optional(),
  connect: z.lazy(() => DirectMessageWhereUniqueInputObjectSchema).optional()
}).strict();
export const DirectMessageCreateNestedOneWithoutAttachmentsInputObjectSchema: z.ZodType<Prisma.DirectMessageCreateNestedOneWithoutAttachmentsInput> = makeSchema() as unknown as z.ZodType<Prisma.DirectMessageCreateNestedOneWithoutAttachmentsInput>;
export const DirectMessageCreateNestedOneWithoutAttachmentsInputObjectZodSchema = makeSchema();
