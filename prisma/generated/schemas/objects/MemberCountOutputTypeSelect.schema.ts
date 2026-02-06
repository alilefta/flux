import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MemberCountOutputTypeCountMessagesArgsObjectSchema as MemberCountOutputTypeCountMessagesArgsObjectSchema } from './MemberCountOutputTypeCountMessagesArgs.schema'

const makeSchema = () => z.object({
  messages: z.union([z.boolean(), z.lazy(() => MemberCountOutputTypeCountMessagesArgsObjectSchema)]).optional()
}).strict();
export const MemberCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.MemberCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.MemberCountOutputTypeSelect>;
export const MemberCountOutputTypeSelectObjectZodSchema = makeSchema();
