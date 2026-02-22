import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { DirectMessageCountOutputTypeSelectObjectSchema as DirectMessageCountOutputTypeSelectObjectSchema } from './DirectMessageCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => DirectMessageCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const DirectMessageCountOutputTypeArgsObjectSchema = makeSchema();
export const DirectMessageCountOutputTypeArgsObjectZodSchema = makeSchema();
