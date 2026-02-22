import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { DirectMessageCreateWithoutRepliesInputObjectSchema as DirectMessageCreateWithoutRepliesInputObjectSchema } from './DirectMessageCreateWithoutRepliesInput.schema';
import { DirectMessageUncheckedCreateWithoutRepliesInputObjectSchema as DirectMessageUncheckedCreateWithoutRepliesInputObjectSchema } from './DirectMessageUncheckedCreateWithoutRepliesInput.schema';
import { DirectMessageCreateOrConnectWithoutRepliesInputObjectSchema as DirectMessageCreateOrConnectWithoutRepliesInputObjectSchema } from './DirectMessageCreateOrConnectWithoutRepliesInput.schema';
import { DirectMessageUpsertWithoutRepliesInputObjectSchema as DirectMessageUpsertWithoutRepliesInputObjectSchema } from './DirectMessageUpsertWithoutRepliesInput.schema';
import { DirectMessageWhereInputObjectSchema as DirectMessageWhereInputObjectSchema } from './DirectMessageWhereInput.schema';
import { DirectMessageWhereUniqueInputObjectSchema as DirectMessageWhereUniqueInputObjectSchema } from './DirectMessageWhereUniqueInput.schema';
import { DirectMessageUpdateToOneWithWhereWithoutRepliesInputObjectSchema as DirectMessageUpdateToOneWithWhereWithoutRepliesInputObjectSchema } from './DirectMessageUpdateToOneWithWhereWithoutRepliesInput.schema';
import { DirectMessageUpdateWithoutRepliesInputObjectSchema as DirectMessageUpdateWithoutRepliesInputObjectSchema } from './DirectMessageUpdateWithoutRepliesInput.schema';
import { DirectMessageUncheckedUpdateWithoutRepliesInputObjectSchema as DirectMessageUncheckedUpdateWithoutRepliesInputObjectSchema } from './DirectMessageUncheckedUpdateWithoutRepliesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => DirectMessageCreateWithoutRepliesInputObjectSchema), z.lazy(() => DirectMessageUncheckedCreateWithoutRepliesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => DirectMessageCreateOrConnectWithoutRepliesInputObjectSchema).optional(),
  upsert: z.lazy(() => DirectMessageUpsertWithoutRepliesInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => DirectMessageWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => DirectMessageWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => DirectMessageWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => DirectMessageUpdateToOneWithWhereWithoutRepliesInputObjectSchema), z.lazy(() => DirectMessageUpdateWithoutRepliesInputObjectSchema), z.lazy(() => DirectMessageUncheckedUpdateWithoutRepliesInputObjectSchema)]).optional()
}).strict();
export const DirectMessageUpdateOneWithoutRepliesNestedInputObjectSchema: z.ZodType<Prisma.DirectMessageUpdateOneWithoutRepliesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.DirectMessageUpdateOneWithoutRepliesNestedInput>;
export const DirectMessageUpdateOneWithoutRepliesNestedInputObjectZodSchema = makeSchema();
