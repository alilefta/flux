import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ServerSelectObjectSchema as ServerSelectObjectSchema } from './ServerSelect.schema';
import { ServerIncludeObjectSchema as ServerIncludeObjectSchema } from './ServerInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => ServerSelectObjectSchema).optional(),
  include: z.lazy(() => ServerIncludeObjectSchema).optional()
}).strict();
export const ServerArgsObjectSchema = makeSchema();
export const ServerArgsObjectZodSchema = makeSchema();
