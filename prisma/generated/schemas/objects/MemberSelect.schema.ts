import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ProfileArgsObjectSchema as ProfileArgsObjectSchema } from './ProfileArgs.schema';
import { ServerArgsObjectSchema as ServerArgsObjectSchema } from './ServerArgs.schema';
import { MessageFindManySchema as MessageFindManySchema } from '../findManyMessage.schema';
import { MemberCountOutputTypeArgsObjectSchema as MemberCountOutputTypeArgsObjectSchema } from './MemberCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  role: z.boolean().optional(),
  profileId: z.boolean().optional(),
  profile: z.union([z.boolean(), z.lazy(() => ProfileArgsObjectSchema)]).optional(),
  serverId: z.boolean().optional(),
  server: z.union([z.boolean(), z.lazy(() => ServerArgsObjectSchema)]).optional(),
  messages: z.union([z.boolean(), z.lazy(() => MessageFindManySchema)]).optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  _count: z.union([z.boolean(), z.lazy(() => MemberCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const MemberSelectObjectSchema: z.ZodType<Prisma.MemberSelect> = makeSchema() as unknown as z.ZodType<Prisma.MemberSelect>;
export const MemberSelectObjectZodSchema = makeSchema();
