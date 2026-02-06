import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MessageWhereUniqueInputObjectSchema as MessageWhereUniqueInputObjectSchema } from './MessageWhereUniqueInput.schema';
import { MessageUpdateWithoutMemberInputObjectSchema as MessageUpdateWithoutMemberInputObjectSchema } from './MessageUpdateWithoutMemberInput.schema';
import { MessageUncheckedUpdateWithoutMemberInputObjectSchema as MessageUncheckedUpdateWithoutMemberInputObjectSchema } from './MessageUncheckedUpdateWithoutMemberInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MessageWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => MessageUpdateWithoutMemberInputObjectSchema), z.lazy(() => MessageUncheckedUpdateWithoutMemberInputObjectSchema)])
}).strict();
export const MessageUpdateWithWhereUniqueWithoutMemberInputObjectSchema: z.ZodType<Prisma.MessageUpdateWithWhereUniqueWithoutMemberInput> = makeSchema() as unknown as z.ZodType<Prisma.MessageUpdateWithWhereUniqueWithoutMemberInput>;
export const MessageUpdateWithWhereUniqueWithoutMemberInputObjectZodSchema = makeSchema();
