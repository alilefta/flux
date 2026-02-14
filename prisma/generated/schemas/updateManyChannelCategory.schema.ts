import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { ChannelCategoryUpdateManyMutationInputObjectSchema as ChannelCategoryUpdateManyMutationInputObjectSchema } from './objects/ChannelCategoryUpdateManyMutationInput.schema';
import { ChannelCategoryWhereInputObjectSchema as ChannelCategoryWhereInputObjectSchema } from './objects/ChannelCategoryWhereInput.schema';

export const ChannelCategoryUpdateManySchema: z.ZodType<Prisma.ChannelCategoryUpdateManyArgs> = z.object({ data: ChannelCategoryUpdateManyMutationInputObjectSchema, where: ChannelCategoryWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ChannelCategoryUpdateManyArgs>;

export const ChannelCategoryUpdateManyZodSchema = z.object({ data: ChannelCategoryUpdateManyMutationInputObjectSchema, where: ChannelCategoryWhereInputObjectSchema.optional() }).strict();