import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ChannelUncheckedCreateNestedManyWithoutCategoryInputObjectSchema as ChannelUncheckedCreateNestedManyWithoutCategoryInputObjectSchema } from './ChannelUncheckedCreateNestedManyWithoutCategoryInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  position: z.number().int().optional(),
  serverId: z.string(),
  createdAt: z.coerce.date().optional(),
  channels: z.lazy(() => ChannelUncheckedCreateNestedManyWithoutCategoryInputObjectSchema).optional()
}).strict();
export const ChannelCategoryUncheckedCreateInputObjectSchema: z.ZodType<Prisma.ChannelCategoryUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ChannelCategoryUncheckedCreateInput>;
export const ChannelCategoryUncheckedCreateInputObjectZodSchema = makeSchema();
