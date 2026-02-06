import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MemberCreateManyServerInputObjectSchema as MemberCreateManyServerInputObjectSchema } from './MemberCreateManyServerInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => MemberCreateManyServerInputObjectSchema), z.lazy(() => MemberCreateManyServerInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const MemberCreateManyServerInputEnvelopeObjectSchema: z.ZodType<Prisma.MemberCreateManyServerInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.MemberCreateManyServerInputEnvelope>;
export const MemberCreateManyServerInputEnvelopeObjectZodSchema = makeSchema();
