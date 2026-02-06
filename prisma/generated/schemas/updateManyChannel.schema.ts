import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { ChannelUpdateManyMutationInputObjectSchema as ChannelUpdateManyMutationInputObjectSchema } from './objects/ChannelUpdateManyMutationInput.schema';
import { ChannelWhereInputObjectSchema as ChannelWhereInputObjectSchema } from './objects/ChannelWhereInput.schema';

export const ChannelUpdateManySchema: z.ZodType<Prisma.ChannelUpdateManyArgs> = z.object({ data: ChannelUpdateManyMutationInputObjectSchema, where: ChannelWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ChannelUpdateManyArgs>;

export const ChannelUpdateManyZodSchema = z.object({ data: ChannelUpdateManyMutationInputObjectSchema, where: ChannelWhereInputObjectSchema.optional() }).strict();