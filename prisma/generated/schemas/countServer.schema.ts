import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { ServerOrderByWithRelationInputObjectSchema as ServerOrderByWithRelationInputObjectSchema } from './objects/ServerOrderByWithRelationInput.schema';
import { ServerWhereInputObjectSchema as ServerWhereInputObjectSchema } from './objects/ServerWhereInput.schema';
import { ServerWhereUniqueInputObjectSchema as ServerWhereUniqueInputObjectSchema } from './objects/ServerWhereUniqueInput.schema';
import { ServerCountAggregateInputObjectSchema as ServerCountAggregateInputObjectSchema } from './objects/ServerCountAggregateInput.schema';

export const ServerCountSchema: z.ZodType<Prisma.ServerCountArgs> = z.object({ orderBy: z.union([ServerOrderByWithRelationInputObjectSchema, ServerOrderByWithRelationInputObjectSchema.array()]).optional(), where: ServerWhereInputObjectSchema.optional(), cursor: ServerWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ServerCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.ServerCountArgs>;

export const ServerCountZodSchema = z.object({ orderBy: z.union([ServerOrderByWithRelationInputObjectSchema, ServerOrderByWithRelationInputObjectSchema.array()]).optional(), where: ServerWhereInputObjectSchema.optional(), cursor: ServerWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ServerCountAggregateInputObjectSchema ]).optional() }).strict();