import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ServerWhereInputObjectSchema as ServerWhereInputObjectSchema } from './ServerWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ServerWhereInputObjectSchema).optional()
}).strict();
export const ProfileCountOutputTypeCountServersArgsObjectSchema = makeSchema();
export const ProfileCountOutputTypeCountServersArgsObjectZodSchema = makeSchema();
