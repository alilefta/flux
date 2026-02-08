import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  clerkId: z.string().optional()
}).strict();
export const ProfileWhereUniqueInputObjectSchema: z.ZodType<Prisma.ProfileWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.ProfileWhereUniqueInput>;
export const ProfileWhereUniqueInputObjectZodSchema = makeSchema();
