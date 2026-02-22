import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { DirectMessageWhereUniqueInputObjectSchema as DirectMessageWhereUniqueInputObjectSchema } from './DirectMessageWhereUniqueInput.schema';
import { DirectMessageUpdateWithoutReplyToInputObjectSchema as DirectMessageUpdateWithoutReplyToInputObjectSchema } from './DirectMessageUpdateWithoutReplyToInput.schema';
import { DirectMessageUncheckedUpdateWithoutReplyToInputObjectSchema as DirectMessageUncheckedUpdateWithoutReplyToInputObjectSchema } from './DirectMessageUncheckedUpdateWithoutReplyToInput.schema';
import { DirectMessageCreateWithoutReplyToInputObjectSchema as DirectMessageCreateWithoutReplyToInputObjectSchema } from './DirectMessageCreateWithoutReplyToInput.schema';
import { DirectMessageUncheckedCreateWithoutReplyToInputObjectSchema as DirectMessageUncheckedCreateWithoutReplyToInputObjectSchema } from './DirectMessageUncheckedCreateWithoutReplyToInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DirectMessageWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => DirectMessageUpdateWithoutReplyToInputObjectSchema), z.lazy(() => DirectMessageUncheckedUpdateWithoutReplyToInputObjectSchema)]),
  create: z.union([z.lazy(() => DirectMessageCreateWithoutReplyToInputObjectSchema), z.lazy(() => DirectMessageUncheckedCreateWithoutReplyToInputObjectSchema)])
}).strict();
export const DirectMessageUpsertWithWhereUniqueWithoutReplyToInputObjectSchema: z.ZodType<Prisma.DirectMessageUpsertWithWhereUniqueWithoutReplyToInput> = makeSchema() as unknown as z.ZodType<Prisma.DirectMessageUpsertWithWhereUniqueWithoutReplyToInput>;
export const DirectMessageUpsertWithWhereUniqueWithoutReplyToInputObjectZodSchema = makeSchema();
