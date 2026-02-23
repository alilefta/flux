import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MessageReactionCreateManyProfileInputObjectSchema as MessageReactionCreateManyProfileInputObjectSchema } from './MessageReactionCreateManyProfileInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => MessageReactionCreateManyProfileInputObjectSchema), z.lazy(() => MessageReactionCreateManyProfileInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const MessageReactionCreateManyProfileInputEnvelopeObjectSchema: z.ZodType<Prisma.MessageReactionCreateManyProfileInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.MessageReactionCreateManyProfileInputEnvelope>;
export const MessageReactionCreateManyProfileInputEnvelopeObjectZodSchema = makeSchema();
