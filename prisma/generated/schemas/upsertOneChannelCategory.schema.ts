import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { ChannelCategorySelectObjectSchema as ChannelCategorySelectObjectSchema } from './objects/ChannelCategorySelect.schema';
import { ChannelCategoryIncludeObjectSchema as ChannelCategoryIncludeObjectSchema } from './objects/ChannelCategoryInclude.schema';
import { ChannelCategoryWhereUniqueInputObjectSchema as ChannelCategoryWhereUniqueInputObjectSchema } from './objects/ChannelCategoryWhereUniqueInput.schema';
import { ChannelCategoryCreateInputObjectSchema as ChannelCategoryCreateInputObjectSchema } from './objects/ChannelCategoryCreateInput.schema';
import { ChannelCategoryUncheckedCreateInputObjectSchema as ChannelCategoryUncheckedCreateInputObjectSchema } from './objects/ChannelCategoryUncheckedCreateInput.schema';
import { ChannelCategoryUpdateInputObjectSchema as ChannelCategoryUpdateInputObjectSchema } from './objects/ChannelCategoryUpdateInput.schema';
import { ChannelCategoryUncheckedUpdateInputObjectSchema as ChannelCategoryUncheckedUpdateInputObjectSchema } from './objects/ChannelCategoryUncheckedUpdateInput.schema';

export const ChannelCategoryUpsertOneSchema: z.ZodType<Prisma.ChannelCategoryUpsertArgs> = z.object({ select: ChannelCategorySelectObjectSchema.optional(), include: ChannelCategoryIncludeObjectSchema.optional(), where: ChannelCategoryWhereUniqueInputObjectSchema, create: z.union([ ChannelCategoryCreateInputObjectSchema, ChannelCategoryUncheckedCreateInputObjectSchema ]), update: z.union([ ChannelCategoryUpdateInputObjectSchema, ChannelCategoryUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.ChannelCategoryUpsertArgs>;

export const ChannelCategoryUpsertOneZodSchema = z.object({ select: ChannelCategorySelectObjectSchema.optional(), include: ChannelCategoryIncludeObjectSchema.optional(), where: ChannelCategoryWhereUniqueInputObjectSchema, create: z.union([ ChannelCategoryCreateInputObjectSchema, ChannelCategoryUncheckedCreateInputObjectSchema ]), update: z.union([ ChannelCategoryUpdateInputObjectSchema, ChannelCategoryUncheckedUpdateInputObjectSchema ]) }).strict();