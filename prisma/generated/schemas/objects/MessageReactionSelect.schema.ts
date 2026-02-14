import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MessageArgsObjectSchema as MessageArgsObjectSchema } from './MessageArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  emoji: z.boolean().optional(),
  messageId: z.boolean().optional(),
  message: z.union([z.boolean(), z.lazy(() => MessageArgsObjectSchema)]).optional(),
  memberId: z.boolean().optional(),
  profileId: z.boolean().optional(),
  createdAt: z.boolean().optional()
}).strict();
export const MessageReactionSelectObjectSchema: z.ZodType<Prisma.MessageReactionSelect> = makeSchema() as unknown as z.ZodType<Prisma.MessageReactionSelect>;
export const MessageReactionSelectObjectZodSchema = makeSchema();
