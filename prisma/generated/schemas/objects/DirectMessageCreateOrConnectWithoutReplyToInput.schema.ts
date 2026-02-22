import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { DirectMessageWhereUniqueInputObjectSchema as DirectMessageWhereUniqueInputObjectSchema } from './DirectMessageWhereUniqueInput.schema';
import { DirectMessageCreateWithoutReplyToInputObjectSchema as DirectMessageCreateWithoutReplyToInputObjectSchema } from './DirectMessageCreateWithoutReplyToInput.schema';
import { DirectMessageUncheckedCreateWithoutReplyToInputObjectSchema as DirectMessageUncheckedCreateWithoutReplyToInputObjectSchema } from './DirectMessageUncheckedCreateWithoutReplyToInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DirectMessageWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => DirectMessageCreateWithoutReplyToInputObjectSchema), z.lazy(() => DirectMessageUncheckedCreateWithoutReplyToInputObjectSchema)])
}).strict();
export const DirectMessageCreateOrConnectWithoutReplyToInputObjectSchema: z.ZodType<Prisma.DirectMessageCreateOrConnectWithoutReplyToInput> = makeSchema() as unknown as z.ZodType<Prisma.DirectMessageCreateOrConnectWithoutReplyToInput>;
export const DirectMessageCreateOrConnectWithoutReplyToInputObjectZodSchema = makeSchema();
