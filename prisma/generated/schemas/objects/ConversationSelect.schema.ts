import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ProfileArgsObjectSchema as ProfileArgsObjectSchema } from './ProfileArgs.schema';
import { DirectMessageFindManySchema as DirectMessageFindManySchema } from '../findManyDirectMessage.schema';
import { ConversationCountOutputTypeArgsObjectSchema as ConversationCountOutputTypeArgsObjectSchema } from './ConversationCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  memberOneId: z.boolean().optional(),
  memberOne: z.union([z.boolean(), z.lazy(() => ProfileArgsObjectSchema)]).optional(),
  memberTwoId: z.boolean().optional(),
  memberTwo: z.union([z.boolean(), z.lazy(() => ProfileArgsObjectSchema)]).optional(),
  directMessages: z.union([z.boolean(), z.lazy(() => DirectMessageFindManySchema)]).optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  _count: z.union([z.boolean(), z.lazy(() => ConversationCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const ConversationSelectObjectSchema: z.ZodType<Prisma.ConversationSelect> = makeSchema() as unknown as z.ZodType<Prisma.ConversationSelect>;
export const ConversationSelectObjectZodSchema = makeSchema();
