import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  clerkId: z.literal(true).optional(),
  name: z.literal(true).optional(),
  imageUrl: z.literal(true).optional(),
  email: z.literal(true).optional(),
  bio: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional()
}).strict();
export const ProfileMaxAggregateInputObjectSchema: z.ZodType<Prisma.ProfileMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ProfileMaxAggregateInputType>;
export const ProfileMaxAggregateInputObjectZodSchema = makeSchema();
