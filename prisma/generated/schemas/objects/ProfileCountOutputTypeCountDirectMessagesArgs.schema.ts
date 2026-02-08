import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { DirectMessageWhereInputObjectSchema as DirectMessageWhereInputObjectSchema } from './DirectMessageWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DirectMessageWhereInputObjectSchema).optional()
}).strict();
export const ProfileCountOutputTypeCountDirectMessagesArgsObjectSchema = makeSchema();
export const ProfileCountOutputTypeCountDirectMessagesArgsObjectZodSchema = makeSchema();
