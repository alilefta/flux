import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ProfileArgsObjectSchema as ProfileArgsObjectSchema } from './ProfileArgs.schema';
import { MemberFindManySchema as MemberFindManySchema } from '../findManyMember.schema';
import { ChannelFindManySchema as ChannelFindManySchema } from '../findManyChannel.schema';
import { ChannelCategoryFindManySchema as ChannelCategoryFindManySchema } from '../findManyChannelCategory.schema';
import { AuditLogFindManySchema as AuditLogFindManySchema } from '../findManyAuditLog.schema';
import { ServerCountOutputTypeArgsObjectSchema as ServerCountOutputTypeArgsObjectSchema } from './ServerCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  imageUrl: z.boolean().optional(),
  inviteCode: z.boolean().optional(),
  description: z.boolean().optional(),
  memberCount: z.boolean().optional(),
  profileId: z.boolean().optional(),
  profile: z.union([z.boolean(), z.lazy(() => ProfileArgsObjectSchema)]).optional(),
  members: z.union([z.boolean(), z.lazy(() => MemberFindManySchema)]).optional(),
  channels: z.union([z.boolean(), z.lazy(() => ChannelFindManySchema)]).optional(),
  categories: z.union([z.boolean(), z.lazy(() => ChannelCategoryFindManySchema)]).optional(),
  auditLog: z.union([z.boolean(), z.lazy(() => AuditLogFindManySchema)]).optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  _count: z.union([z.boolean(), z.lazy(() => ServerCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const ServerSelectObjectSchema: z.ZodType<Prisma.ServerSelect> = makeSchema() as unknown as z.ZodType<Prisma.ServerSelect>;
export const ServerSelectObjectZodSchema = makeSchema();
