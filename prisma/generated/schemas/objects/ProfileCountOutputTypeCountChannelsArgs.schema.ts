import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ChannelWhereInputObjectSchema as ChannelWhereInputObjectSchema } from './ChannelWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ChannelWhereInputObjectSchema).optional()
}).strict();
export const ProfileCountOutputTypeCountChannelsArgsObjectSchema = makeSchema();
export const ProfileCountOutputTypeCountChannelsArgsObjectZodSchema = makeSchema();
