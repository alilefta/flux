import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MessageCountOutputTypeSelectObjectSchema as MessageCountOutputTypeSelectObjectSchema } from './MessageCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => MessageCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const MessageCountOutputTypeArgsObjectSchema = makeSchema();
export const MessageCountOutputTypeArgsObjectZodSchema = makeSchema();
