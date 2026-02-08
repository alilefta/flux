import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional()
}).strict();
export const DirectMessageWhereUniqueInputObjectSchema: z.ZodType<Prisma.DirectMessageWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.DirectMessageWhereUniqueInput>;
export const DirectMessageWhereUniqueInputObjectZodSchema = makeSchema();
