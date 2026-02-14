import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { ChannelCategorySelectObjectSchema as ChannelCategorySelectObjectSchema } from './objects/ChannelCategorySelect.schema';
import { ChannelCategoryUpdateManyMutationInputObjectSchema as ChannelCategoryUpdateManyMutationInputObjectSchema } from './objects/ChannelCategoryUpdateManyMutationInput.schema';
import { ChannelCategoryWhereInputObjectSchema as ChannelCategoryWhereInputObjectSchema } from './objects/ChannelCategoryWhereInput.schema';

export const ChannelCategoryUpdateManyAndReturnSchema: z.ZodType<Prisma.ChannelCategoryUpdateManyAndReturnArgs> = z.object({ select: ChannelCategorySelectObjectSchema.optional(), data: ChannelCategoryUpdateManyMutationInputObjectSchema, where: ChannelCategoryWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ChannelCategoryUpdateManyAndReturnArgs>;

export const ChannelCategoryUpdateManyAndReturnZodSchema = z.object({ select: ChannelCategorySelectObjectSchema.optional(), data: ChannelCategoryUpdateManyMutationInputObjectSchema, where: ChannelCategoryWhereInputObjectSchema.optional() }).strict();