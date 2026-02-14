import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ChannelCreateManyCategoryInputObjectSchema as ChannelCreateManyCategoryInputObjectSchema } from './ChannelCreateManyCategoryInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ChannelCreateManyCategoryInputObjectSchema), z.lazy(() => ChannelCreateManyCategoryInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const ChannelCreateManyCategoryInputEnvelopeObjectSchema: z.ZodType<Prisma.ChannelCreateManyCategoryInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ChannelCreateManyCategoryInputEnvelope>;
export const ChannelCreateManyCategoryInputEnvelopeObjectZodSchema = makeSchema();
