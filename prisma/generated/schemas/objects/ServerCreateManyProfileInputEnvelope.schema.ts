import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ServerCreateManyProfileInputObjectSchema as ServerCreateManyProfileInputObjectSchema } from './ServerCreateManyProfileInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ServerCreateManyProfileInputObjectSchema), z.lazy(() => ServerCreateManyProfileInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const ServerCreateManyProfileInputEnvelopeObjectSchema: z.ZodType<Prisma.ServerCreateManyProfileInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ServerCreateManyProfileInputEnvelope>;
export const ServerCreateManyProfileInputEnvelopeObjectZodSchema = makeSchema();
