import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ConversationWhereInputObjectSchema as ConversationWhereInputObjectSchema } from './ConversationWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ConversationWhereInputObjectSchema).optional()
}).strict();
export const ProfileCountOutputTypeCountConversationsInitiatedArgsObjectSchema = makeSchema();
export const ProfileCountOutputTypeCountConversationsInitiatedArgsObjectZodSchema = makeSchema();
