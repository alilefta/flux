import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { DirectMessageSelectObjectSchema as DirectMessageSelectObjectSchema } from './DirectMessageSelect.schema';
import { DirectMessageIncludeObjectSchema as DirectMessageIncludeObjectSchema } from './DirectMessageInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => DirectMessageSelectObjectSchema).optional(),
  include: z.lazy(() => DirectMessageIncludeObjectSchema).optional()
}).strict();
export const DirectMessageArgsObjectSchema = makeSchema();
export const DirectMessageArgsObjectZodSchema = makeSchema();
