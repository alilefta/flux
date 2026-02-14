import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ChannelCategoryCreateManyServerInputObjectSchema as ChannelCategoryCreateManyServerInputObjectSchema } from './ChannelCategoryCreateManyServerInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ChannelCategoryCreateManyServerInputObjectSchema), z.lazy(() => ChannelCategoryCreateManyServerInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const ChannelCategoryCreateManyServerInputEnvelopeObjectSchema: z.ZodType<Prisma.ChannelCategoryCreateManyServerInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ChannelCategoryCreateManyServerInputEnvelope>;
export const ChannelCategoryCreateManyServerInputEnvelopeObjectZodSchema = makeSchema();
