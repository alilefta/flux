import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ChannelCreateManyProfileInputObjectSchema as ChannelCreateManyProfileInputObjectSchema } from './ChannelCreateManyProfileInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ChannelCreateManyProfileInputObjectSchema), z.lazy(() => ChannelCreateManyProfileInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const ChannelCreateManyProfileInputEnvelopeObjectSchema: z.ZodType<Prisma.ChannelCreateManyProfileInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ChannelCreateManyProfileInputEnvelope>;
export const ChannelCreateManyProfileInputEnvelopeObjectZodSchema = makeSchema();
