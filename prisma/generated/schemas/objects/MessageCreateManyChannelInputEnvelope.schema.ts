import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MessageCreateManyChannelInputObjectSchema as MessageCreateManyChannelInputObjectSchema } from './MessageCreateManyChannelInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => MessageCreateManyChannelInputObjectSchema), z.lazy(() => MessageCreateManyChannelInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const MessageCreateManyChannelInputEnvelopeObjectSchema: z.ZodType<Prisma.MessageCreateManyChannelInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.MessageCreateManyChannelInputEnvelope>;
export const MessageCreateManyChannelInputEnvelopeObjectZodSchema = makeSchema();
