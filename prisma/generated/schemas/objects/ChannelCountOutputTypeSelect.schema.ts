import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ChannelCountOutputTypeCountMessagesArgsObjectSchema as ChannelCountOutputTypeCountMessagesArgsObjectSchema } from './ChannelCountOutputTypeCountMessagesArgs.schema'

const makeSchema = () => z.object({
  messages: z.union([z.boolean(), z.lazy(() => ChannelCountOutputTypeCountMessagesArgsObjectSchema)]).optional()
}).strict();
export const ChannelCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.ChannelCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.ChannelCountOutputTypeSelect>;
export const ChannelCountOutputTypeSelectObjectZodSchema = makeSchema();
