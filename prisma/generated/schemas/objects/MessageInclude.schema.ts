import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MemberArgsObjectSchema as MemberArgsObjectSchema } from './MemberArgs.schema';
import { ChannelArgsObjectSchema as ChannelArgsObjectSchema } from './ChannelArgs.schema'

const makeSchema = () => z.object({
  member: z.union([z.boolean(), z.lazy(() => MemberArgsObjectSchema)]).optional(),
  channel: z.union([z.boolean(), z.lazy(() => ChannelArgsObjectSchema)]).optional()
}).strict();
export const MessageIncludeObjectSchema: z.ZodType<Prisma.MessageInclude> = makeSchema() as unknown as z.ZodType<Prisma.MessageInclude>;
export const MessageIncludeObjectZodSchema = makeSchema();
