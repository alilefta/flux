import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ChannelCreateManyServerInputObjectSchema as ChannelCreateManyServerInputObjectSchema } from './ChannelCreateManyServerInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ChannelCreateManyServerInputObjectSchema), z.lazy(() => ChannelCreateManyServerInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const ChannelCreateManyServerInputEnvelopeObjectSchema: z.ZodType<Prisma.ChannelCreateManyServerInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ChannelCreateManyServerInputEnvelope>;
export const ChannelCreateManyServerInputEnvelopeObjectZodSchema = makeSchema();
