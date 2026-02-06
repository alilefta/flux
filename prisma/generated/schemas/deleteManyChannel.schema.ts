import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { ChannelWhereInputObjectSchema as ChannelWhereInputObjectSchema } from './objects/ChannelWhereInput.schema';

export const ChannelDeleteManySchema: z.ZodType<Prisma.ChannelDeleteManyArgs> = z.object({ where: ChannelWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ChannelDeleteManyArgs>;

export const ChannelDeleteManyZodSchema = z.object({ where: ChannelWhereInputObjectSchema.optional() }).strict();