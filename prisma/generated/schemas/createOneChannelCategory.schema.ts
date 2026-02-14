import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { ChannelCategorySelectObjectSchema as ChannelCategorySelectObjectSchema } from './objects/ChannelCategorySelect.schema';
import { ChannelCategoryIncludeObjectSchema as ChannelCategoryIncludeObjectSchema } from './objects/ChannelCategoryInclude.schema';
import { ChannelCategoryCreateInputObjectSchema as ChannelCategoryCreateInputObjectSchema } from './objects/ChannelCategoryCreateInput.schema';
import { ChannelCategoryUncheckedCreateInputObjectSchema as ChannelCategoryUncheckedCreateInputObjectSchema } from './objects/ChannelCategoryUncheckedCreateInput.schema';

export const ChannelCategoryCreateOneSchema: z.ZodType<Prisma.ChannelCategoryCreateArgs> = z.object({ select: ChannelCategorySelectObjectSchema.optional(), include: ChannelCategoryIncludeObjectSchema.optional(), data: z.union([ChannelCategoryCreateInputObjectSchema, ChannelCategoryUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.ChannelCategoryCreateArgs>;

export const ChannelCategoryCreateOneZodSchema = z.object({ select: ChannelCategorySelectObjectSchema.optional(), include: ChannelCategoryIncludeObjectSchema.optional(), data: z.union([ChannelCategoryCreateInputObjectSchema, ChannelCategoryUncheckedCreateInputObjectSchema]) }).strict();