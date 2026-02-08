import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ChannelSelectObjectSchema as ChannelSelectObjectSchema } from './ChannelSelect.schema';
import { ChannelIncludeObjectSchema as ChannelIncludeObjectSchema } from './ChannelInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => ChannelSelectObjectSchema).optional(),
  include: z.lazy(() => ChannelIncludeObjectSchema).optional()
}).strict();
export const ChannelArgsObjectSchema = makeSchema();
export const ChannelArgsObjectZodSchema = makeSchema();
