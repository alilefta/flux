import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional()
}).strict();
export const MessageWhereUniqueInputObjectSchema: z.ZodType<Prisma.MessageWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.MessageWhereUniqueInput>;
export const MessageWhereUniqueInputObjectZodSchema = makeSchema();
