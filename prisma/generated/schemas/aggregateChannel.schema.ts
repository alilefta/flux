import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { ChannelOrderByWithRelationInputObjectSchema as ChannelOrderByWithRelationInputObjectSchema } from './objects/ChannelOrderByWithRelationInput.schema';
import { ChannelWhereInputObjectSchema as ChannelWhereInputObjectSchema } from './objects/ChannelWhereInput.schema';
import { ChannelWhereUniqueInputObjectSchema as ChannelWhereUniqueInputObjectSchema } from './objects/ChannelWhereUniqueInput.schema';
import { ChannelCountAggregateInputObjectSchema as ChannelCountAggregateInputObjectSchema } from './objects/ChannelCountAggregateInput.schema';
import { ChannelMinAggregateInputObjectSchema as ChannelMinAggregateInputObjectSchema } from './objects/ChannelMinAggregateInput.schema';
import { ChannelMaxAggregateInputObjectSchema as ChannelMaxAggregateInputObjectSchema } from './objects/ChannelMaxAggregateInput.schema';

export const ChannelAggregateSchema: z.ZodType<Prisma.ChannelAggregateArgs> = z.object({ orderBy: z.union([ChannelOrderByWithRelationInputObjectSchema, ChannelOrderByWithRelationInputObjectSchema.array()]).optional(), where: ChannelWhereInputObjectSchema.optional(), cursor: ChannelWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), ChannelCountAggregateInputObjectSchema ]).optional(), _min: ChannelMinAggregateInputObjectSchema.optional(), _max: ChannelMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ChannelAggregateArgs>;

export const ChannelAggregateZodSchema = z.object({ orderBy: z.union([ChannelOrderByWithRelationInputObjectSchema, ChannelOrderByWithRelationInputObjectSchema.array()]).optional(), where: ChannelWhereInputObjectSchema.optional(), cursor: ChannelWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), ChannelCountAggregateInputObjectSchema ]).optional(), _min: ChannelMinAggregateInputObjectSchema.optional(), _max: ChannelMaxAggregateInputObjectSchema.optional() }).strict();