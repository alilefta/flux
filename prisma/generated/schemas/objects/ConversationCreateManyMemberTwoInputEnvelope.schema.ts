import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ConversationCreateManyMemberTwoInputObjectSchema as ConversationCreateManyMemberTwoInputObjectSchema } from './ConversationCreateManyMemberTwoInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ConversationCreateManyMemberTwoInputObjectSchema), z.lazy(() => ConversationCreateManyMemberTwoInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const ConversationCreateManyMemberTwoInputEnvelopeObjectSchema: z.ZodType<Prisma.ConversationCreateManyMemberTwoInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ConversationCreateManyMemberTwoInputEnvelope>;
export const ConversationCreateManyMemberTwoInputEnvelopeObjectZodSchema = makeSchema();
