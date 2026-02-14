import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  position: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const ChannelCategoryCreateManyServerInputObjectSchema: z.ZodType<Prisma.ChannelCategoryCreateManyServerInput> = makeSchema() as unknown as z.ZodType<Prisma.ChannelCategoryCreateManyServerInput>;
export const ChannelCategoryCreateManyServerInputObjectZodSchema = makeSchema();
