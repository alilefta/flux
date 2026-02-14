import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { ChannelCategorySelectObjectSchema as ChannelCategorySelectObjectSchema } from './objects/ChannelCategorySelect.schema';
import { ChannelCategoryIncludeObjectSchema as ChannelCategoryIncludeObjectSchema } from './objects/ChannelCategoryInclude.schema';
import { ChannelCategoryUpdateInputObjectSchema as ChannelCategoryUpdateInputObjectSchema } from './objects/ChannelCategoryUpdateInput.schema';
import { ChannelCategoryUncheckedUpdateInputObjectSchema as ChannelCategoryUncheckedUpdateInputObjectSchema } from './objects/ChannelCategoryUncheckedUpdateInput.schema';
import { ChannelCategoryWhereUniqueInputObjectSchema as ChannelCategoryWhereUniqueInputObjectSchema } from './objects/ChannelCategoryWhereUniqueInput.schema';

export const ChannelCategoryUpdateOneSchema: z.ZodType<Prisma.ChannelCategoryUpdateArgs> = z.object({ select: ChannelCategorySelectObjectSchema.optional(), include: ChannelCategoryIncludeObjectSchema.optional(), data: z.union([ChannelCategoryUpdateInputObjectSchema, ChannelCategoryUncheckedUpdateInputObjectSchema]), where: ChannelCategoryWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ChannelCategoryUpdateArgs>;

export const ChannelCategoryUpdateOneZodSchema = z.object({ select: ChannelCategorySelectObjectSchema.optional(), include: ChannelCategoryIncludeObjectSchema.optional(), data: z.union([ChannelCategoryUpdateInputObjectSchema, ChannelCategoryUncheckedUpdateInputObjectSchema]), where: ChannelCategoryWhereUniqueInputObjectSchema }).strict();