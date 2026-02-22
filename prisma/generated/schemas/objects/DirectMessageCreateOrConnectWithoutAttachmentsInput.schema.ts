import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { DirectMessageWhereUniqueInputObjectSchema as DirectMessageWhereUniqueInputObjectSchema } from './DirectMessageWhereUniqueInput.schema';
import { DirectMessageCreateWithoutAttachmentsInputObjectSchema as DirectMessageCreateWithoutAttachmentsInputObjectSchema } from './DirectMessageCreateWithoutAttachmentsInput.schema';
import { DirectMessageUncheckedCreateWithoutAttachmentsInputObjectSchema as DirectMessageUncheckedCreateWithoutAttachmentsInputObjectSchema } from './DirectMessageUncheckedCreateWithoutAttachmentsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DirectMessageWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => DirectMessageCreateWithoutAttachmentsInputObjectSchema), z.lazy(() => DirectMessageUncheckedCreateWithoutAttachmentsInputObjectSchema)])
}).strict();
export const DirectMessageCreateOrConnectWithoutAttachmentsInputObjectSchema: z.ZodType<Prisma.DirectMessageCreateOrConnectWithoutAttachmentsInput> = makeSchema() as unknown as z.ZodType<Prisma.DirectMessageCreateOrConnectWithoutAttachmentsInput>;
export const DirectMessageCreateOrConnectWithoutAttachmentsInputObjectZodSchema = makeSchema();
