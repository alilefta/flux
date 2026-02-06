import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ChannelCountOutputTypeSelectObjectSchema as ChannelCountOutputTypeSelectObjectSchema } from './ChannelCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => ChannelCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const ChannelCountOutputTypeArgsObjectSchema = makeSchema();
export const ChannelCountOutputTypeArgsObjectZodSchema = makeSchema();
