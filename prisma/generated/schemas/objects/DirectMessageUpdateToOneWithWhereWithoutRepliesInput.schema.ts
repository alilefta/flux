import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { DirectMessageWhereInputObjectSchema as DirectMessageWhereInputObjectSchema } from './DirectMessageWhereInput.schema';
import { DirectMessageUpdateWithoutRepliesInputObjectSchema as DirectMessageUpdateWithoutRepliesInputObjectSchema } from './DirectMessageUpdateWithoutRepliesInput.schema';
import { DirectMessageUncheckedUpdateWithoutRepliesInputObjectSchema as DirectMessageUncheckedUpdateWithoutRepliesInputObjectSchema } from './DirectMessageUncheckedUpdateWithoutRepliesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DirectMessageWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => DirectMessageUpdateWithoutRepliesInputObjectSchema), z.lazy(() => DirectMessageUncheckedUpdateWithoutRepliesInputObjectSchema)])
}).strict();
export const DirectMessageUpdateToOneWithWhereWithoutRepliesInputObjectSchema: z.ZodType<Prisma.DirectMessageUpdateToOneWithWhereWithoutRepliesInput> = makeSchema() as unknown as z.ZodType<Prisma.DirectMessageUpdateToOneWithWhereWithoutRepliesInput>;
export const DirectMessageUpdateToOneWithWhereWithoutRepliesInputObjectZodSchema = makeSchema();
