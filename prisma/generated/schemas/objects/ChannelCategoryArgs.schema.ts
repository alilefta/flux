import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ChannelCategorySelectObjectSchema as ChannelCategorySelectObjectSchema } from './ChannelCategorySelect.schema';
import { ChannelCategoryIncludeObjectSchema as ChannelCategoryIncludeObjectSchema } from './ChannelCategoryInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => ChannelCategorySelectObjectSchema).optional(),
  include: z.lazy(() => ChannelCategoryIncludeObjectSchema).optional()
}).strict();
export const ChannelCategoryArgsObjectSchema = makeSchema();
export const ChannelCategoryArgsObjectZodSchema = makeSchema();
