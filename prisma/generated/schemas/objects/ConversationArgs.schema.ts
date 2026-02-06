import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ConversationSelectObjectSchema as ConversationSelectObjectSchema } from './ConversationSelect.schema';
import { ConversationIncludeObjectSchema as ConversationIncludeObjectSchema } from './ConversationInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => ConversationSelectObjectSchema).optional(),
  include: z.lazy(() => ConversationIncludeObjectSchema).optional()
}).strict();
export const ConversationArgsObjectSchema = makeSchema();
export const ConversationArgsObjectZodSchema = makeSchema();
