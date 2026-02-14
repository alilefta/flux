import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  position: z.number().int().optional(),
  serverId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const ChannelCategoryUncheckedCreateWithoutChannelsInputObjectSchema: z.ZodType<Prisma.ChannelCategoryUncheckedCreateWithoutChannelsInput> = makeSchema() as unknown as z.ZodType<Prisma.ChannelCategoryUncheckedCreateWithoutChannelsInput>;
export const ChannelCategoryUncheckedCreateWithoutChannelsInputObjectZodSchema = makeSchema();
