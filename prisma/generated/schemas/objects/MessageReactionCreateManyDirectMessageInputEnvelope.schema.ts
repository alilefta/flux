import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MessageReactionCreateManyDirectMessageInputObjectSchema as MessageReactionCreateManyDirectMessageInputObjectSchema } from './MessageReactionCreateManyDirectMessageInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => MessageReactionCreateManyDirectMessageInputObjectSchema), z.lazy(() => MessageReactionCreateManyDirectMessageInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const MessageReactionCreateManyDirectMessageInputEnvelopeObjectSchema: z.ZodType<Prisma.MessageReactionCreateManyDirectMessageInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.MessageReactionCreateManyDirectMessageInputEnvelope>;
export const MessageReactionCreateManyDirectMessageInputEnvelopeObjectZodSchema = makeSchema();
