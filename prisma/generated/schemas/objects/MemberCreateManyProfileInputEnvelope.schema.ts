import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MemberCreateManyProfileInputObjectSchema as MemberCreateManyProfileInputObjectSchema } from './MemberCreateManyProfileInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => MemberCreateManyProfileInputObjectSchema), z.lazy(() => MemberCreateManyProfileInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const MemberCreateManyProfileInputEnvelopeObjectSchema: z.ZodType<Prisma.MemberCreateManyProfileInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.MemberCreateManyProfileInputEnvelope>;
export const MemberCreateManyProfileInputEnvelopeObjectZodSchema = makeSchema();
