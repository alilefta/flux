import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ProfileArgsObjectSchema as ProfileArgsObjectSchema } from './ProfileArgs.schema';
import { ServerArgsObjectSchema as ServerArgsObjectSchema } from './ServerArgs.schema';
import { ChannelCategoryArgsObjectSchema as ChannelCategoryArgsObjectSchema } from './ChannelCategoryArgs.schema';
import { MessageFindManySchema as MessageFindManySchema } from '../findManyMessage.schema';
import { ChannelCountOutputTypeArgsObjectSchema as ChannelCountOutputTypeArgsObjectSchema } from './ChannelCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  type: z.boolean().optional(),
  topic: z.boolean().optional(),
  position: z.boolean().optional(),
  profileId: z.boolean().optional(),
  profile: z.union([z.boolean(), z.lazy(() => ProfileArgsObjectSchema)]).optional(),
  serverId: z.boolean().optional(),
  server: z.union([z.boolean(), z.lazy(() => ServerArgsObjectSchema)]).optional(),
  categoryId: z.boolean().optional(),
  category: z.union([z.boolean(), z.lazy(() => ChannelCategoryArgsObjectSchema)]).optional(),
  messages: z.union([z.boolean(), z.lazy(() => MessageFindManySchema)]).optional(),
  isDefault: z.boolean().optional(),
  isLocked: z.boolean().optional(),
  slowModeRate: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  _count: z.union([z.boolean(), z.lazy(() => ChannelCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const ChannelSelectObjectSchema: z.ZodType<Prisma.ChannelSelect> = makeSchema() as unknown as z.ZodType<Prisma.ChannelSelect>;
export const ChannelSelectObjectZodSchema = makeSchema();
