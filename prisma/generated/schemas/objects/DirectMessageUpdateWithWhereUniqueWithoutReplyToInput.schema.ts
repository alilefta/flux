import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { DirectMessageWhereUniqueInputObjectSchema as DirectMessageWhereUniqueInputObjectSchema } from './DirectMessageWhereUniqueInput.schema';
import { DirectMessageUpdateWithoutReplyToInputObjectSchema as DirectMessageUpdateWithoutReplyToInputObjectSchema } from './DirectMessageUpdateWithoutReplyToInput.schema';
import { DirectMessageUncheckedUpdateWithoutReplyToInputObjectSchema as DirectMessageUncheckedUpdateWithoutReplyToInputObjectSchema } from './DirectMessageUncheckedUpdateWithoutReplyToInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DirectMessageWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => DirectMessageUpdateWithoutReplyToInputObjectSchema), z.lazy(() => DirectMessageUncheckedUpdateWithoutReplyToInputObjectSchema)])
}).strict();
export const DirectMessageUpdateWithWhereUniqueWithoutReplyToInputObjectSchema: z.ZodType<Prisma.DirectMessageUpdateWithWhereUniqueWithoutReplyToInput> = makeSchema() as unknown as z.ZodType<Prisma.DirectMessageUpdateWithWhereUniqueWithoutReplyToInput>;
export const DirectMessageUpdateWithWhereUniqueWithoutReplyToInputObjectZodSchema = makeSchema();
