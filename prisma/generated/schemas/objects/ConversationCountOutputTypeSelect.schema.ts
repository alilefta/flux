import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ConversationCountOutputTypeCountDirectMessagesArgsObjectSchema as ConversationCountOutputTypeCountDirectMessagesArgsObjectSchema } from './ConversationCountOutputTypeCountDirectMessagesArgs.schema'

const makeSchema = () => z.object({
  directMessages: z.union([z.boolean(), z.lazy(() => ConversationCountOutputTypeCountDirectMessagesArgsObjectSchema)]).optional()
}).strict();
export const ConversationCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.ConversationCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.ConversationCountOutputTypeSelect>;
export const ConversationCountOutputTypeSelectObjectZodSchema = makeSchema();
