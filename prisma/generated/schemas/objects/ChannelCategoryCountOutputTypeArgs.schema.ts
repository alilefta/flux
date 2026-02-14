import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ChannelCategoryCountOutputTypeSelectObjectSchema as ChannelCategoryCountOutputTypeSelectObjectSchema } from './ChannelCategoryCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => ChannelCategoryCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const ChannelCategoryCountOutputTypeArgsObjectSchema = makeSchema();
export const ChannelCategoryCountOutputTypeArgsObjectZodSchema = makeSchema();
