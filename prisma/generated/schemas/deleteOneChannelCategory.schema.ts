import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { ChannelCategorySelectObjectSchema as ChannelCategorySelectObjectSchema } from './objects/ChannelCategorySelect.schema';
import { ChannelCategoryIncludeObjectSchema as ChannelCategoryIncludeObjectSchema } from './objects/ChannelCategoryInclude.schema';
import { ChannelCategoryWhereUniqueInputObjectSchema as ChannelCategoryWhereUniqueInputObjectSchema } from './objects/ChannelCategoryWhereUniqueInput.schema';

export const ChannelCategoryDeleteOneSchema: z.ZodType<Prisma.ChannelCategoryDeleteArgs> = z.object({ select: ChannelCategorySelectObjectSchema.optional(), include: ChannelCategoryIncludeObjectSchema.optional(), where: ChannelCategoryWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ChannelCategoryDeleteArgs>;

export const ChannelCategoryDeleteOneZodSchema = z.object({ select: ChannelCategorySelectObjectSchema.optional(), include: ChannelCategoryIncludeObjectSchema.optional(), where: ChannelCategoryWhereUniqueInputObjectSchema }).strict();