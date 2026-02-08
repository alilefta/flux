import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const ConversationUpdateManyMutationInputObjectSchema: z.ZodType<Prisma.ConversationUpdateManyMutationInput> = makeSchema() as unknown as z.ZodType<Prisma.ConversationUpdateManyMutationInput>;
export const ConversationUpdateManyMutationInputObjectZodSchema = makeSchema();
