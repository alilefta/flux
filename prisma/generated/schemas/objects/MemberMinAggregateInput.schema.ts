import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  role: z.literal(true).optional(),
  profileId: z.literal(true).optional(),
  serverId: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional()
}).strict();
export const MemberMinAggregateInputObjectSchema: z.ZodType<Prisma.MemberMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.MemberMinAggregateInputType>;
export const MemberMinAggregateInputObjectZodSchema = makeSchema();
