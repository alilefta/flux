import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ProfileArgsObjectSchema as ProfileArgsObjectSchema } from './ProfileArgs.schema';
import { ServerArgsObjectSchema as ServerArgsObjectSchema } from './ServerArgs.schema';
import { MessageFindManySchema as MessageFindManySchema } from '../findManyMessage.schema';
import { ChannelCountOutputTypeArgsObjectSchema as ChannelCountOutputTypeArgsObjectSchema } from './ChannelCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  profile: z.union([z.boolean(), z.lazy(() => ProfileArgsObjectSchema)]).optional(),
  server: z.union([z.boolean(), z.lazy(() => ServerArgsObjectSchema)]).optional(),
  messages: z.union([z.boolean(), z.lazy(() => MessageFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => ChannelCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const ChannelIncludeObjectSchema: z.ZodType<Prisma.ChannelInclude> = makeSchema() as unknown as z.ZodType<Prisma.ChannelInclude>;
export const ChannelIncludeObjectZodSchema = makeSchema();
