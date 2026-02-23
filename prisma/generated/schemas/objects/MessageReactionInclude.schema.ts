import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MessageArgsObjectSchema as MessageArgsObjectSchema } from './MessageArgs.schema';
import { DirectMessageArgsObjectSchema as DirectMessageArgsObjectSchema } from './DirectMessageArgs.schema';
import { ProfileArgsObjectSchema as ProfileArgsObjectSchema } from './ProfileArgs.schema'

const makeSchema = () => z.object({
  message: z.union([z.boolean(), z.lazy(() => MessageArgsObjectSchema)]).optional(),
  directMessage: z.union([z.boolean(), z.lazy(() => DirectMessageArgsObjectSchema)]).optional(),
  profile: z.union([z.boolean(), z.lazy(() => ProfileArgsObjectSchema)]).optional()
}).strict();
export const MessageReactionIncludeObjectSchema: z.ZodType<Prisma.MessageReactionInclude> = makeSchema() as unknown as z.ZodType<Prisma.MessageReactionInclude>;
export const MessageReactionIncludeObjectZodSchema = makeSchema();
