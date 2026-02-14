import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MessageCreateWithoutRepliesInputObjectSchema as MessageCreateWithoutRepliesInputObjectSchema } from './MessageCreateWithoutRepliesInput.schema';
import { MessageUncheckedCreateWithoutRepliesInputObjectSchema as MessageUncheckedCreateWithoutRepliesInputObjectSchema } from './MessageUncheckedCreateWithoutRepliesInput.schema';
import { MessageCreateOrConnectWithoutRepliesInputObjectSchema as MessageCreateOrConnectWithoutRepliesInputObjectSchema } from './MessageCreateOrConnectWithoutRepliesInput.schema';
import { MessageUpsertWithoutRepliesInputObjectSchema as MessageUpsertWithoutRepliesInputObjectSchema } from './MessageUpsertWithoutRepliesInput.schema';
import { MessageWhereInputObjectSchema as MessageWhereInputObjectSchema } from './MessageWhereInput.schema';
import { MessageWhereUniqueInputObjectSchema as MessageWhereUniqueInputObjectSchema } from './MessageWhereUniqueInput.schema';
import { MessageUpdateToOneWithWhereWithoutRepliesInputObjectSchema as MessageUpdateToOneWithWhereWithoutRepliesInputObjectSchema } from './MessageUpdateToOneWithWhereWithoutRepliesInput.schema';
import { MessageUpdateWithoutRepliesInputObjectSchema as MessageUpdateWithoutRepliesInputObjectSchema } from './MessageUpdateWithoutRepliesInput.schema';
import { MessageUncheckedUpdateWithoutRepliesInputObjectSchema as MessageUncheckedUpdateWithoutRepliesInputObjectSchema } from './MessageUncheckedUpdateWithoutRepliesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => MessageCreateWithoutRepliesInputObjectSchema), z.lazy(() => MessageUncheckedCreateWithoutRepliesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => MessageCreateOrConnectWithoutRepliesInputObjectSchema).optional(),
  upsert: z.lazy(() => MessageUpsertWithoutRepliesInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => MessageWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => MessageWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => MessageWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => MessageUpdateToOneWithWhereWithoutRepliesInputObjectSchema), z.lazy(() => MessageUpdateWithoutRepliesInputObjectSchema), z.lazy(() => MessageUncheckedUpdateWithoutRepliesInputObjectSchema)]).optional()
}).strict();
export const MessageUpdateOneWithoutRepliesNestedInputObjectSchema: z.ZodType<Prisma.MessageUpdateOneWithoutRepliesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.MessageUpdateOneWithoutRepliesNestedInput>;
export const MessageUpdateOneWithoutRepliesNestedInputObjectZodSchema = makeSchema();
