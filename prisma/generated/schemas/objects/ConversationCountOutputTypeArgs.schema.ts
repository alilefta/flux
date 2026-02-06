import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ConversationCountOutputTypeSelectObjectSchema as ConversationCountOutputTypeSelectObjectSchema } from './ConversationCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => ConversationCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const ConversationCountOutputTypeArgsObjectSchema = makeSchema();
export const ConversationCountOutputTypeArgsObjectZodSchema = makeSchema();
