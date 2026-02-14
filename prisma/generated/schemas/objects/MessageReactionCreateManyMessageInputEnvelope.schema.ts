import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MessageReactionCreateManyMessageInputObjectSchema as MessageReactionCreateManyMessageInputObjectSchema } from './MessageReactionCreateManyMessageInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => MessageReactionCreateManyMessageInputObjectSchema), z.lazy(() => MessageReactionCreateManyMessageInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const MessageReactionCreateManyMessageInputEnvelopeObjectSchema: z.ZodType<Prisma.MessageReactionCreateManyMessageInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.MessageReactionCreateManyMessageInputEnvelope>;
export const MessageReactionCreateManyMessageInputEnvelopeObjectZodSchema = makeSchema();
