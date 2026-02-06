import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MessageScalarWhereInputObjectSchema as MessageScalarWhereInputObjectSchema } from './MessageScalarWhereInput.schema';
import { MessageUpdateManyMutationInputObjectSchema as MessageUpdateManyMutationInputObjectSchema } from './MessageUpdateManyMutationInput.schema';
import { MessageUncheckedUpdateManyWithoutChannelInputObjectSchema as MessageUncheckedUpdateManyWithoutChannelInputObjectSchema } from './MessageUncheckedUpdateManyWithoutChannelInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MessageScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => MessageUpdateManyMutationInputObjectSchema), z.lazy(() => MessageUncheckedUpdateManyWithoutChannelInputObjectSchema)])
}).strict();
export const MessageUpdateManyWithWhereWithoutChannelInputObjectSchema: z.ZodType<Prisma.MessageUpdateManyWithWhereWithoutChannelInput> = makeSchema() as unknown as z.ZodType<Prisma.MessageUpdateManyWithWhereWithoutChannelInput>;
export const MessageUpdateManyWithWhereWithoutChannelInputObjectZodSchema = makeSchema();
