import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { DirectMessageOrderByWithRelationInputObjectSchema as DirectMessageOrderByWithRelationInputObjectSchema } from './objects/DirectMessageOrderByWithRelationInput.schema';
import { DirectMessageWhereInputObjectSchema as DirectMessageWhereInputObjectSchema } from './objects/DirectMessageWhereInput.schema';
import { DirectMessageWhereUniqueInputObjectSchema as DirectMessageWhereUniqueInputObjectSchema } from './objects/DirectMessageWhereUniqueInput.schema';
import { DirectMessageCountAggregateInputObjectSchema as DirectMessageCountAggregateInputObjectSchema } from './objects/DirectMessageCountAggregateInput.schema';

export const DirectMessageCountSchema: z.ZodType<Prisma.DirectMessageCountArgs> = z.object({ orderBy: z.union([DirectMessageOrderByWithRelationInputObjectSchema, DirectMessageOrderByWithRelationInputObjectSchema.array()]).optional(), where: DirectMessageWhereInputObjectSchema.optional(), cursor: DirectMessageWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), DirectMessageCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.DirectMessageCountArgs>;

export const DirectMessageCountZodSchema = z.object({ orderBy: z.union([DirectMessageOrderByWithRelationInputObjectSchema, DirectMessageOrderByWithRelationInputObjectSchema.array()]).optional(), where: DirectMessageWhereInputObjectSchema.optional(), cursor: DirectMessageWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), DirectMessageCountAggregateInputObjectSchema ]).optional() }).strict();