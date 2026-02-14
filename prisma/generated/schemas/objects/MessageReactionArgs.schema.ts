import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MessageReactionSelectObjectSchema as MessageReactionSelectObjectSchema } from './MessageReactionSelect.schema';
import { MessageReactionIncludeObjectSchema as MessageReactionIncludeObjectSchema } from './MessageReactionInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => MessageReactionSelectObjectSchema).optional(),
  include: z.lazy(() => MessageReactionIncludeObjectSchema).optional()
}).strict();
export const MessageReactionArgsObjectSchema = makeSchema();
export const MessageReactionArgsObjectZodSchema = makeSchema();
