import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ChannelCreateNestedManyWithoutCategoryInputObjectSchema as ChannelCreateNestedManyWithoutCategoryInputObjectSchema } from './ChannelCreateNestedManyWithoutCategoryInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  position: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  channels: z.lazy(() => ChannelCreateNestedManyWithoutCategoryInputObjectSchema).optional()
}).strict();
export const ChannelCategoryCreateWithoutServerInputObjectSchema: z.ZodType<Prisma.ChannelCategoryCreateWithoutServerInput> = makeSchema() as unknown as z.ZodType<Prisma.ChannelCategoryCreateWithoutServerInput>;
export const ChannelCategoryCreateWithoutServerInputObjectZodSchema = makeSchema();
