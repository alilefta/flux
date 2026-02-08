import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional()
}).strict();
export const ChannelWhereUniqueInputObjectSchema: z.ZodType<Prisma.ChannelWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.ChannelWhereUniqueInput>;
export const ChannelWhereUniqueInputObjectZodSchema = makeSchema();
