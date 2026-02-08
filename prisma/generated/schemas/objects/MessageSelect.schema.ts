import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MemberArgsObjectSchema as MemberArgsObjectSchema } from './MemberArgs.schema';
import { ChannelArgsObjectSchema as ChannelArgsObjectSchema } from './ChannelArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  content: z.boolean().optional(),
  fileUrl: z.boolean().optional(),
  memberId: z.boolean().optional(),
  member: z.union([z.boolean(), z.lazy(() => MemberArgsObjectSchema)]).optional(),
  channelId: z.boolean().optional(),
  channel: z.union([z.boolean(), z.lazy(() => ChannelArgsObjectSchema)]).optional(),
  deleted: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  edited: z.boolean().optional()
}).strict();
export const MessageSelectObjectSchema: z.ZodType<Prisma.MessageSelect> = makeSchema() as unknown as z.ZodType<Prisma.MessageSelect>;
export const MessageSelectObjectZodSchema = makeSchema();
