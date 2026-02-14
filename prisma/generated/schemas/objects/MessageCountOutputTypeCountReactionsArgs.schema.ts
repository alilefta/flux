import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MessageReactionWhereInputObjectSchema as MessageReactionWhereInputObjectSchema } from './MessageReactionWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MessageReactionWhereInputObjectSchema).optional()
}).strict();
export const MessageCountOutputTypeCountReactionsArgsObjectSchema = makeSchema();
export const MessageCountOutputTypeCountReactionsArgsObjectZodSchema = makeSchema();
