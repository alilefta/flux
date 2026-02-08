import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { ServerOrderByWithRelationInputObjectSchema as ServerOrderByWithRelationInputObjectSchema } from './objects/ServerOrderByWithRelationInput.schema';
import { ServerWhereInputObjectSchema as ServerWhereInputObjectSchema } from './objects/ServerWhereInput.schema';
import { ServerWhereUniqueInputObjectSchema as ServerWhereUniqueInputObjectSchema } from './objects/ServerWhereUniqueInput.schema';
import { ServerCountAggregateInputObjectSchema as ServerCountAggregateInputObjectSchema } from './objects/ServerCountAggregateInput.schema';
import { ServerMinAggregateInputObjectSchema as ServerMinAggregateInputObjectSchema } from './objects/ServerMinAggregateInput.schema';
import { ServerMaxAggregateInputObjectSchema as ServerMaxAggregateInputObjectSchema } from './objects/ServerMaxAggregateInput.schema';
import { ServerAvgAggregateInputObjectSchema as ServerAvgAggregateInputObjectSchema } from './objects/ServerAvgAggregateInput.schema';
import { ServerSumAggregateInputObjectSchema as ServerSumAggregateInputObjectSchema } from './objects/ServerSumAggregateInput.schema';

export const ServerAggregateSchema: z.ZodType<Prisma.ServerAggregateArgs> = z.object({ orderBy: z.union([ServerOrderByWithRelationInputObjectSchema, ServerOrderByWithRelationInputObjectSchema.array()]).optional(), where: ServerWhereInputObjectSchema.optional(), cursor: ServerWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), ServerCountAggregateInputObjectSchema ]).optional(), _min: ServerMinAggregateInputObjectSchema.optional(), _max: ServerMaxAggregateInputObjectSchema.optional(), _avg: ServerAvgAggregateInputObjectSchema.optional(), _sum: ServerSumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ServerAggregateArgs>;

export const ServerAggregateZodSchema = z.object({ orderBy: z.union([ServerOrderByWithRelationInputObjectSchema, ServerOrderByWithRelationInputObjectSchema.array()]).optional(), where: ServerWhereInputObjectSchema.optional(), cursor: ServerWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), ServerCountAggregateInputObjectSchema ]).optional(), _min: ServerMinAggregateInputObjectSchema.optional(), _max: ServerMaxAggregateInputObjectSchema.optional(), _avg: ServerAvgAggregateInputObjectSchema.optional(), _sum: ServerSumAggregateInputObjectSchema.optional() }).strict();