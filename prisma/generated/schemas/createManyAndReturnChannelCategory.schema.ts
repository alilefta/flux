import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { ChannelCategorySelectObjectSchema as ChannelCategorySelectObjectSchema } from './objects/ChannelCategorySelect.schema';
import { ChannelCategoryCreateManyInputObjectSchema as ChannelCategoryCreateManyInputObjectSchema } from './objects/ChannelCategoryCreateManyInput.schema';

export const ChannelCategoryCreateManyAndReturnSchema: z.ZodType<Prisma.ChannelCategoryCreateManyAndReturnArgs> = z.object({ select: ChannelCategorySelectObjectSchema.optional(), data: z.union([ ChannelCategoryCreateManyInputObjectSchema, z.array(ChannelCategoryCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.ChannelCategoryCreateManyAndReturnArgs>;

export const ChannelCategoryCreateManyAndReturnZodSchema = z.object({ select: ChannelCategorySelectObjectSchema.optional(), data: z.union([ ChannelCategoryCreateManyInputObjectSchema, z.array(ChannelCategoryCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();