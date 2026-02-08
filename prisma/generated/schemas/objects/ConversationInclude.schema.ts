import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ProfileArgsObjectSchema as ProfileArgsObjectSchema } from './ProfileArgs.schema';
import { DirectMessageFindManySchema as DirectMessageFindManySchema } from '../findManyDirectMessage.schema';
import { ConversationCountOutputTypeArgsObjectSchema as ConversationCountOutputTypeArgsObjectSchema } from './ConversationCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  memberOne: z.union([z.boolean(), z.lazy(() => ProfileArgsObjectSchema)]).optional(),
  memberTwo: z.union([z.boolean(), z.lazy(() => ProfileArgsObjectSchema)]).optional(),
  directMessages: z.union([z.boolean(), z.lazy(() => DirectMessageFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => ConversationCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const ConversationIncludeObjectSchema: z.ZodType<Prisma.ConversationInclude> = makeSchema() as unknown as z.ZodType<Prisma.ConversationInclude>;
export const ConversationIncludeObjectZodSchema = makeSchema();
