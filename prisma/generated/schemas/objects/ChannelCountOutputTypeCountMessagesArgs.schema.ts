import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MessageWhereInputObjectSchema as MessageWhereInputObjectSchema } from './MessageWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MessageWhereInputObjectSchema).optional()
}).strict();
export const ChannelCountOutputTypeCountMessagesArgsObjectSchema = makeSchema();
export const ChannelCountOutputTypeCountMessagesArgsObjectZodSchema = makeSchema();
