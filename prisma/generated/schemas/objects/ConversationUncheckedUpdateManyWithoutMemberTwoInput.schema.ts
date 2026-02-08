import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  memberOneId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const ConversationUncheckedUpdateManyWithoutMemberTwoInputObjectSchema: z.ZodType<Prisma.ConversationUncheckedUpdateManyWithoutMemberTwoInput> = makeSchema() as unknown as z.ZodType<Prisma.ConversationUncheckedUpdateManyWithoutMemberTwoInput>;
export const ConversationUncheckedUpdateManyWithoutMemberTwoInputObjectZodSchema = makeSchema();
