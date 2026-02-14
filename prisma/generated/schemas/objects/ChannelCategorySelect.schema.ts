import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ServerArgsObjectSchema as ServerArgsObjectSchema } from './ServerArgs.schema';
import { ChannelFindManySchema as ChannelFindManySchema } from '../findManyChannel.schema';
import { ChannelCategoryCountOutputTypeArgsObjectSchema as ChannelCategoryCountOutputTypeArgsObjectSchema } from './ChannelCategoryCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  position: z.boolean().optional(),
  serverId: z.boolean().optional(),
  server: z.union([z.boolean(), z.lazy(() => ServerArgsObjectSchema)]).optional(),
  channels: z.union([z.boolean(), z.lazy(() => ChannelFindManySchema)]).optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  _count: z.union([z.boolean(), z.lazy(() => ChannelCategoryCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const ChannelCategorySelectObjectSchema: z.ZodType<Prisma.ChannelCategorySelect> = makeSchema() as unknown as z.ZodType<Prisma.ChannelCategorySelect>;
export const ChannelCategorySelectObjectZodSchema = makeSchema();
