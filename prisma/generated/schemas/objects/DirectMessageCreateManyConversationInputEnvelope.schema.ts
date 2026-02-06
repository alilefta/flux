import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { DirectMessageCreateManyConversationInputObjectSchema as DirectMessageCreateManyConversationInputObjectSchema } from './DirectMessageCreateManyConversationInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => DirectMessageCreateManyConversationInputObjectSchema), z.lazy(() => DirectMessageCreateManyConversationInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const DirectMessageCreateManyConversationInputEnvelopeObjectSchema: z.ZodType<Prisma.DirectMessageCreateManyConversationInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.DirectMessageCreateManyConversationInputEnvelope>;
export const DirectMessageCreateManyConversationInputEnvelopeObjectZodSchema = makeSchema();
