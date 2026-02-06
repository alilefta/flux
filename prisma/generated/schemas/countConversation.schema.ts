import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { ConversationOrderByWithRelationInputObjectSchema as ConversationOrderByWithRelationInputObjectSchema } from './objects/ConversationOrderByWithRelationInput.schema';
import { ConversationWhereInputObjectSchema as ConversationWhereInputObjectSchema } from './objects/ConversationWhereInput.schema';
import { ConversationWhereUniqueInputObjectSchema as ConversationWhereUniqueInputObjectSchema } from './objects/ConversationWhereUniqueInput.schema';
import { ConversationCountAggregateInputObjectSchema as ConversationCountAggregateInputObjectSchema } from './objects/ConversationCountAggregateInput.schema';

export const ConversationCountSchema: z.ZodType<Prisma.ConversationCountArgs> = z.object({ orderBy: z.union([ConversationOrderByWithRelationInputObjectSchema, ConversationOrderByWithRelationInputObjectSchema.array()]).optional(), where: ConversationWhereInputObjectSchema.optional(), cursor: ConversationWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ConversationCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.ConversationCountArgs>;

export const ConversationCountZodSchema = z.object({ orderBy: z.union([ConversationOrderByWithRelationInputObjectSchema, ConversationOrderByWithRelationInputObjectSchema.array()]).optional(), where: ConversationWhereInputObjectSchema.optional(), cursor: ConversationWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ConversationCountAggregateInputObjectSchema ]).optional() }).strict();