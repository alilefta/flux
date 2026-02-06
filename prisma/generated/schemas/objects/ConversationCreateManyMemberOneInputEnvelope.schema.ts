import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ConversationCreateManyMemberOneInputObjectSchema as ConversationCreateManyMemberOneInputObjectSchema } from './ConversationCreateManyMemberOneInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ConversationCreateManyMemberOneInputObjectSchema), z.lazy(() => ConversationCreateManyMemberOneInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const ConversationCreateManyMemberOneInputEnvelopeObjectSchema: z.ZodType<Prisma.ConversationCreateManyMemberOneInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ConversationCreateManyMemberOneInputEnvelope>;
export const ConversationCreateManyMemberOneInputEnvelopeObjectZodSchema = makeSchema();
