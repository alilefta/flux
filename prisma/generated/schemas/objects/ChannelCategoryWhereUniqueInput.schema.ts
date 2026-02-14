import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional()
}).strict();
export const ChannelCategoryWhereUniqueInputObjectSchema: z.ZodType<Prisma.ChannelCategoryWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.ChannelCategoryWhereUniqueInput>;
export const ChannelCategoryWhereUniqueInputObjectZodSchema = makeSchema();
