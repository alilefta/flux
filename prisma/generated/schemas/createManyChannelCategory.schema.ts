import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { ChannelCategoryCreateManyInputObjectSchema as ChannelCategoryCreateManyInputObjectSchema } from './objects/ChannelCategoryCreateManyInput.schema';

export const ChannelCategoryCreateManySchema: z.ZodType<Prisma.ChannelCategoryCreateManyArgs> = z.object({ data: z.union([ ChannelCategoryCreateManyInputObjectSchema, z.array(ChannelCategoryCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.ChannelCategoryCreateManyArgs>;

export const ChannelCategoryCreateManyZodSchema = z.object({ data: z.union([ ChannelCategoryCreateManyInputObjectSchema, z.array(ChannelCategoryCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();