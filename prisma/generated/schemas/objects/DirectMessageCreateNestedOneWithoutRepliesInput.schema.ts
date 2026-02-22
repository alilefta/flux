import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { DirectMessageCreateWithoutRepliesInputObjectSchema as DirectMessageCreateWithoutRepliesInputObjectSchema } from './DirectMessageCreateWithoutRepliesInput.schema';
import { DirectMessageUncheckedCreateWithoutRepliesInputObjectSchema as DirectMessageUncheckedCreateWithoutRepliesInputObjectSchema } from './DirectMessageUncheckedCreateWithoutRepliesInput.schema';
import { DirectMessageCreateOrConnectWithoutRepliesInputObjectSchema as DirectMessageCreateOrConnectWithoutRepliesInputObjectSchema } from './DirectMessageCreateOrConnectWithoutRepliesInput.schema';
import { DirectMessageWhereUniqueInputObjectSchema as DirectMessageWhereUniqueInputObjectSchema } from './DirectMessageWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => DirectMessageCreateWithoutRepliesInputObjectSchema), z.lazy(() => DirectMessageUncheckedCreateWithoutRepliesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => DirectMessageCreateOrConnectWithoutRepliesInputObjectSchema).optional(),
  connect: z.lazy(() => DirectMessageWhereUniqueInputObjectSchema).optional()
}).strict();
export const DirectMessageCreateNestedOneWithoutRepliesInputObjectSchema: z.ZodType<Prisma.DirectMessageCreateNestedOneWithoutRepliesInput> = makeSchema() as unknown as z.ZodType<Prisma.DirectMessageCreateNestedOneWithoutRepliesInput>;
export const DirectMessageCreateNestedOneWithoutRepliesInputObjectZodSchema = makeSchema();
