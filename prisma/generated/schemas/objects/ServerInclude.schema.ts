import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ProfileArgsObjectSchema as ProfileArgsObjectSchema } from './ProfileArgs.schema';
import { MemberFindManySchema as MemberFindManySchema } from '../findManyMember.schema';
import { ChannelFindManySchema as ChannelFindManySchema } from '../findManyChannel.schema';
import { ServerCountOutputTypeArgsObjectSchema as ServerCountOutputTypeArgsObjectSchema } from './ServerCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  profile: z.union([z.boolean(), z.lazy(() => ProfileArgsObjectSchema)]).optional(),
  members: z.union([z.boolean(), z.lazy(() => MemberFindManySchema)]).optional(),
  channels: z.union([z.boolean(), z.lazy(() => ChannelFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => ServerCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const ServerIncludeObjectSchema: z.ZodType<Prisma.ServerInclude> = makeSchema() as unknown as z.ZodType<Prisma.ServerInclude>;
export const ServerIncludeObjectZodSchema = makeSchema();
