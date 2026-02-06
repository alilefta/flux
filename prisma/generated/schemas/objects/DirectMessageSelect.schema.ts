import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ProfileArgsObjectSchema as ProfileArgsObjectSchema } from './ProfileArgs.schema';
import { ConversationArgsObjectSchema as ConversationArgsObjectSchema } from './ConversationArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  content: z.boolean().optional(),
  fileUrl: z.boolean().optional(),
  memberId: z.boolean().optional(),
  member: z.union([z.boolean(), z.lazy(() => ProfileArgsObjectSchema)]).optional(),
  conversationId: z.boolean().optional(),
  conversation: z.union([z.boolean(), z.lazy(() => ConversationArgsObjectSchema)]).optional(),
  deleted: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional()
}).strict();
export const DirectMessageSelectObjectSchema: z.ZodType<Prisma.DirectMessageSelect> = makeSchema() as unknown as z.ZodType<Prisma.DirectMessageSelect>;
export const DirectMessageSelectObjectZodSchema = makeSchema();
