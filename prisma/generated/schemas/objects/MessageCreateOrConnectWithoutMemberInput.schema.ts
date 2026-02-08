import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MessageWhereUniqueInputObjectSchema as MessageWhereUniqueInputObjectSchema } from './MessageWhereUniqueInput.schema';
import { MessageCreateWithoutMemberInputObjectSchema as MessageCreateWithoutMemberInputObjectSchema } from './MessageCreateWithoutMemberInput.schema';
import { MessageUncheckedCreateWithoutMemberInputObjectSchema as MessageUncheckedCreateWithoutMemberInputObjectSchema } from './MessageUncheckedCreateWithoutMemberInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MessageWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => MessageCreateWithoutMemberInputObjectSchema), z.lazy(() => MessageUncheckedCreateWithoutMemberInputObjectSchema)])
}).strict();
export const MessageCreateOrConnectWithoutMemberInputObjectSchema: z.ZodType<Prisma.MessageCreateOrConnectWithoutMemberInput> = makeSchema() as unknown as z.ZodType<Prisma.MessageCreateOrConnectWithoutMemberInput>;
export const MessageCreateOrConnectWithoutMemberInputObjectZodSchema = makeSchema();
