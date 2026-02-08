import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MessageCreateManyMemberInputObjectSchema as MessageCreateManyMemberInputObjectSchema } from './MessageCreateManyMemberInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => MessageCreateManyMemberInputObjectSchema), z.lazy(() => MessageCreateManyMemberInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const MessageCreateManyMemberInputEnvelopeObjectSchema: z.ZodType<Prisma.MessageCreateManyMemberInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.MessageCreateManyMemberInputEnvelope>;
export const MessageCreateManyMemberInputEnvelopeObjectZodSchema = makeSchema();
