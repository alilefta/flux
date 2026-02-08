import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ChannelTypeSchema } from '../enums/ChannelType.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  type: ChannelTypeSchema.optional(),
  profileId: z.string(),
  isDefault: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const ChannelCreateManyServerInputObjectSchema: z.ZodType<Prisma.ChannelCreateManyServerInput> = makeSchema() as unknown as z.ZodType<Prisma.ChannelCreateManyServerInput>;
export const ChannelCreateManyServerInputObjectZodSchema = makeSchema();
