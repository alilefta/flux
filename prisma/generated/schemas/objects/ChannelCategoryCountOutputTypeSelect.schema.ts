import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ChannelCategoryCountOutputTypeCountChannelsArgsObjectSchema as ChannelCategoryCountOutputTypeCountChannelsArgsObjectSchema } from './ChannelCategoryCountOutputTypeCountChannelsArgs.schema'

const makeSchema = () => z.object({
  channels: z.union([z.boolean(), z.lazy(() => ChannelCategoryCountOutputTypeCountChannelsArgsObjectSchema)]).optional()
}).strict();
export const ChannelCategoryCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.ChannelCategoryCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.ChannelCategoryCountOutputTypeSelect>;
export const ChannelCategoryCountOutputTypeSelectObjectZodSchema = makeSchema();
