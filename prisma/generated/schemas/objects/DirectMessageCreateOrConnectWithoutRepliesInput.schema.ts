import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { DirectMessageWhereUniqueInputObjectSchema as DirectMessageWhereUniqueInputObjectSchema } from './DirectMessageWhereUniqueInput.schema';
import { DirectMessageCreateWithoutRepliesInputObjectSchema as DirectMessageCreateWithoutRepliesInputObjectSchema } from './DirectMessageCreateWithoutRepliesInput.schema';
import { DirectMessageUncheckedCreateWithoutRepliesInputObjectSchema as DirectMessageUncheckedCreateWithoutRepliesInputObjectSchema } from './DirectMessageUncheckedCreateWithoutRepliesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DirectMessageWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => DirectMessageCreateWithoutRepliesInputObjectSchema), z.lazy(() => DirectMessageUncheckedCreateWithoutRepliesInputObjectSchema)])
}).strict();
export const DirectMessageCreateOrConnectWithoutRepliesInputObjectSchema: z.ZodType<Prisma.DirectMessageCreateOrConnectWithoutRepliesInput> = makeSchema() as unknown as z.ZodType<Prisma.DirectMessageCreateOrConnectWithoutRepliesInput>;
export const DirectMessageCreateOrConnectWithoutRepliesInputObjectZodSchema = makeSchema();
