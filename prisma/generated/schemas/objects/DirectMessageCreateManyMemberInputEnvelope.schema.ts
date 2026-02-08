import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { DirectMessageCreateManyMemberInputObjectSchema as DirectMessageCreateManyMemberInputObjectSchema } from './DirectMessageCreateManyMemberInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => DirectMessageCreateManyMemberInputObjectSchema), z.lazy(() => DirectMessageCreateManyMemberInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const DirectMessageCreateManyMemberInputEnvelopeObjectSchema: z.ZodType<Prisma.DirectMessageCreateManyMemberInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.DirectMessageCreateManyMemberInputEnvelope>;
export const DirectMessageCreateManyMemberInputEnvelopeObjectZodSchema = makeSchema();
