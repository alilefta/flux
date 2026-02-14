import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ChannelTypeSchema } from '../enums/ChannelType.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  type: ChannelTypeSchema.optional(),
  topic: z.string().optional().nullable(),
  position: z.number().int().optional(),
  profileId: z.string(),
  serverId: z.string(),
  categoryId: z.string().optional().nullable(),
  isDefault: z.boolean().optional(),
  isLocked: z.boolean().optional(),
  slowModeRate: z.number().int().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const ChannelCreateManyInputObjectSchema: z.ZodType<Prisma.ChannelCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.ChannelCreateManyInput>;
export const ChannelCreateManyInputObjectZodSchema = makeSchema();
