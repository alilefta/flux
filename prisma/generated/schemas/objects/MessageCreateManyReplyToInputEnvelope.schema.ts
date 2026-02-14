import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MessageCreateManyReplyToInputObjectSchema as MessageCreateManyReplyToInputObjectSchema } from './MessageCreateManyReplyToInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => MessageCreateManyReplyToInputObjectSchema), z.lazy(() => MessageCreateManyReplyToInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const MessageCreateManyReplyToInputEnvelopeObjectSchema: z.ZodType<Prisma.MessageCreateManyReplyToInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.MessageCreateManyReplyToInputEnvelope>;
export const MessageCreateManyReplyToInputEnvelopeObjectZodSchema = makeSchema();
