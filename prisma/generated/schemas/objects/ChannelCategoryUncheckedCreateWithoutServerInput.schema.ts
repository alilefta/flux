import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ChannelUncheckedCreateNestedManyWithoutCategoryInputObjectSchema as ChannelUncheckedCreateNestedManyWithoutCategoryInputObjectSchema } from './ChannelUncheckedCreateNestedManyWithoutCategoryInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  position: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  channels: z.lazy(() => ChannelUncheckedCreateNestedManyWithoutCategoryInputObjectSchema).optional()
}).strict();
export const ChannelCategoryUncheckedCreateWithoutServerInputObjectSchema: z.ZodType<Prisma.ChannelCategoryUncheckedCreateWithoutServerInput> = makeSchema() as unknown as z.ZodType<Prisma.ChannelCategoryUncheckedCreateWithoutServerInput>;
export const ChannelCategoryUncheckedCreateWithoutServerInputObjectZodSchema = makeSchema();
