import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { ChannelOrderByWithRelationInputObjectSchema as ChannelOrderByWithRelationInputObjectSchema } from './objects/ChannelOrderByWithRelationInput.schema';
import { ChannelWhereInputObjectSchema as ChannelWhereInputObjectSchema } from './objects/ChannelWhereInput.schema';
import { ChannelWhereUniqueInputObjectSchema as ChannelWhereUniqueInputObjectSchema } from './objects/ChannelWhereUniqueInput.schema';
import { ChannelCountAggregateInputObjectSchema as ChannelCountAggregateInputObjectSchema } from './objects/ChannelCountAggregateInput.schema';

export const ChannelCountSchema: z.ZodType<Prisma.ChannelCountArgs> = z.object({ orderBy: z.union([ChannelOrderByWithRelationInputObjectSchema, ChannelOrderByWithRelationInputObjectSchema.array()]).optional(), where: ChannelWhereInputObjectSchema.optional(), cursor: ChannelWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ChannelCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.ChannelCountArgs>;

export const ChannelCountZodSchema = z.object({ orderBy: z.union([ChannelOrderByWithRelationInputObjectSchema, ChannelOrderByWithRelationInputObjectSchema.array()]).optional(), where: ChannelWhereInputObjectSchema.optional(), cursor: ChannelWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ChannelCountAggregateInputObjectSchema ]).optional() }).strict();