import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  memberTwoId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const ConversationUncheckedUpdateManyWithoutMemberOneInputObjectSchema: z.ZodType<Prisma.ConversationUncheckedUpdateManyWithoutMemberOneInput> = makeSchema() as unknown as z.ZodType<Prisma.ConversationUncheckedUpdateManyWithoutMemberOneInput>;
export const ConversationUncheckedUpdateManyWithoutMemberOneInputObjectZodSchema = makeSchema();
