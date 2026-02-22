import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { DirectMessageUpdateWithoutRepliesInputObjectSchema as DirectMessageUpdateWithoutRepliesInputObjectSchema } from './DirectMessageUpdateWithoutRepliesInput.schema';
import { DirectMessageUncheckedUpdateWithoutRepliesInputObjectSchema as DirectMessageUncheckedUpdateWithoutRepliesInputObjectSchema } from './DirectMessageUncheckedUpdateWithoutRepliesInput.schema';
import { DirectMessageCreateWithoutRepliesInputObjectSchema as DirectMessageCreateWithoutRepliesInputObjectSchema } from './DirectMessageCreateWithoutRepliesInput.schema';
import { DirectMessageUncheckedCreateWithoutRepliesInputObjectSchema as DirectMessageUncheckedCreateWithoutRepliesInputObjectSchema } from './DirectMessageUncheckedCreateWithoutRepliesInput.schema';
import { DirectMessageWhereInputObjectSchema as DirectMessageWhereInputObjectSchema } from './DirectMessageWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => DirectMessageUpdateWithoutRepliesInputObjectSchema), z.lazy(() => DirectMessageUncheckedUpdateWithoutRepliesInputObjectSchema)]),
  create: z.union([z.lazy(() => DirectMessageCreateWithoutRepliesInputObjectSchema), z.lazy(() => DirectMessageUncheckedCreateWithoutRepliesInputObjectSchema)]),
  where: z.lazy(() => DirectMessageWhereInputObjectSchema).optional()
}).strict();
export const DirectMessageUpsertWithoutRepliesInputObjectSchema: z.ZodType<Prisma.DirectMessageUpsertWithoutRepliesInput> = makeSchema() as unknown as z.ZodType<Prisma.DirectMessageUpsertWithoutRepliesInput>;
export const DirectMessageUpsertWithoutRepliesInputObjectZodSchema = makeSchema();
