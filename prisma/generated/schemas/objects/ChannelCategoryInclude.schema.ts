import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ServerArgsObjectSchema as ServerArgsObjectSchema } from './ServerArgs.schema';
import { ChannelFindManySchema as ChannelFindManySchema } from '../findManyChannel.schema';
import { ChannelCategoryCountOutputTypeArgsObjectSchema as ChannelCategoryCountOutputTypeArgsObjectSchema } from './ChannelCategoryCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  server: z.union([z.boolean(), z.lazy(() => ServerArgsObjectSchema)]).optional(),
  channels: z.union([z.boolean(), z.lazy(() => ChannelFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => ChannelCategoryCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const ChannelCategoryIncludeObjectSchema: z.ZodType<Prisma.ChannelCategoryInclude> = makeSchema() as unknown as z.ZodType<Prisma.ChannelCategoryInclude>;
export const ChannelCategoryIncludeObjectZodSchema = makeSchema();
