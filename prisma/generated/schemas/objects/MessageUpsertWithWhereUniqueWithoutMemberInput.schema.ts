import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MessageWhereUniqueInputObjectSchema as MessageWhereUniqueInputObjectSchema } from './MessageWhereUniqueInput.schema';
import { MessageUpdateWithoutMemberInputObjectSchema as MessageUpdateWithoutMemberInputObjectSchema } from './MessageUpdateWithoutMemberInput.schema';
import { MessageUncheckedUpdateWithoutMemberInputObjectSchema as MessageUncheckedUpdateWithoutMemberInputObjectSchema } from './MessageUncheckedUpdateWithoutMemberInput.schema';
import { MessageCreateWithoutMemberInputObjectSchema as MessageCreateWithoutMemberInputObjectSchema } from './MessageCreateWithoutMemberInput.schema';
import { MessageUncheckedCreateWithoutMemberInputObjectSchema as MessageUncheckedCreateWithoutMemberInputObjectSchema } from './MessageUncheckedCreateWithoutMemberInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MessageWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => MessageUpdateWithoutMemberInputObjectSchema), z.lazy(() => MessageUncheckedUpdateWithoutMemberInputObjectSchema)]),
  create: z.union([z.lazy(() => MessageCreateWithoutMemberInputObjectSchema), z.lazy(() => MessageUncheckedCreateWithoutMemberInputObjectSchema)])
}).strict();
export const MessageUpsertWithWhereUniqueWithoutMemberInputObjectSchema: z.ZodType<Prisma.MessageUpsertWithWhereUniqueWithoutMemberInput> = makeSchema() as unknown as z.ZodType<Prisma.MessageUpsertWithWhereUniqueWithoutMemberInput>;
export const MessageUpsertWithWhereUniqueWithoutMemberInputObjectZodSchema = makeSchema();
