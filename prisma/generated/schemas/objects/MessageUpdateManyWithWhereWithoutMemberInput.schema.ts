import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MessageScalarWhereInputObjectSchema as MessageScalarWhereInputObjectSchema } from './MessageScalarWhereInput.schema';
import { MessageUpdateManyMutationInputObjectSchema as MessageUpdateManyMutationInputObjectSchema } from './MessageUpdateManyMutationInput.schema';
import { MessageUncheckedUpdateManyWithoutMemberInputObjectSchema as MessageUncheckedUpdateManyWithoutMemberInputObjectSchema } from './MessageUncheckedUpdateManyWithoutMemberInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MessageScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => MessageUpdateManyMutationInputObjectSchema), z.lazy(() => MessageUncheckedUpdateManyWithoutMemberInputObjectSchema)])
}).strict();
export const MessageUpdateManyWithWhereWithoutMemberInputObjectSchema: z.ZodType<Prisma.MessageUpdateManyWithWhereWithoutMemberInput> = makeSchema() as unknown as z.ZodType<Prisma.MessageUpdateManyWithWhereWithoutMemberInput>;
export const MessageUpdateManyWithWhereWithoutMemberInputObjectZodSchema = makeSchema();
