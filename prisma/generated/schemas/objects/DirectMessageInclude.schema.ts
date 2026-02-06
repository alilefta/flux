import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ProfileArgsObjectSchema as ProfileArgsObjectSchema } from './ProfileArgs.schema';
import { ConversationArgsObjectSchema as ConversationArgsObjectSchema } from './ConversationArgs.schema'

const makeSchema = () => z.object({
  member: z.union([z.boolean(), z.lazy(() => ProfileArgsObjectSchema)]).optional(),
  conversation: z.union([z.boolean(), z.lazy(() => ConversationArgsObjectSchema)]).optional()
}).strict();
export const DirectMessageIncludeObjectSchema: z.ZodType<Prisma.DirectMessageInclude> = makeSchema() as unknown as z.ZodType<Prisma.DirectMessageInclude>;
export const DirectMessageIncludeObjectZodSchema = makeSchema();
