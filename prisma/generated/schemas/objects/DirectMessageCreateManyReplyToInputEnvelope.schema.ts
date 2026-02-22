import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { DirectMessageCreateManyReplyToInputObjectSchema as DirectMessageCreateManyReplyToInputObjectSchema } from './DirectMessageCreateManyReplyToInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => DirectMessageCreateManyReplyToInputObjectSchema), z.lazy(() => DirectMessageCreateManyReplyToInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const DirectMessageCreateManyReplyToInputEnvelopeObjectSchema: z.ZodType<Prisma.DirectMessageCreateManyReplyToInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.DirectMessageCreateManyReplyToInputEnvelope>;
export const DirectMessageCreateManyReplyToInputEnvelopeObjectZodSchema = makeSchema();
