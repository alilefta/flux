import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { ChannelCategoryWhereInputObjectSchema as ChannelCategoryWhereInputObjectSchema } from './objects/ChannelCategoryWhereInput.schema';

export const ChannelCategoryDeleteManySchema: z.ZodType<Prisma.ChannelCategoryDeleteManyArgs> = z.object({ where: ChannelCategoryWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ChannelCategoryDeleteManyArgs>;

export const ChannelCategoryDeleteManyZodSchema = z.object({ where: ChannelCategoryWhereInputObjectSchema.optional() }).strict();