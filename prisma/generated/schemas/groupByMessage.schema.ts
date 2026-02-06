import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { MessageWhereInputObjectSchema as MessageWhereInputObjectSchema } from './objects/MessageWhereInput.schema';
import { MessageOrderByWithAggregationInputObjectSchema as MessageOrderByWithAggregationInputObjectSchema } from './objects/MessageOrderByWithAggregationInput.schema';
import { MessageScalarWhereWithAggregatesInputObjectSchema as MessageScalarWhereWithAggregatesInputObjectSchema } from './objects/MessageScalarWhereWithAggregatesInput.schema';
import { MessageScalarFieldEnumSchema } from './enums/MessageScalarFieldEnum.schema';
import { MessageCountAggregateInputObjectSchema as MessageCountAggregateInputObjectSchema } from './objects/MessageCountAggregateInput.schema';
import { MessageMinAggregateInputObjectSchema as MessageMinAggregateInputObjectSchema } from './objects/MessageMinAggregateInput.schema';
import { MessageMaxAggregateInputObjectSchema as MessageMaxAggregateInputObjectSchema } from './objects/MessageMaxAggregateInput.schema';

export const MessageGroupBySchema: z.ZodType<Prisma.MessageGroupByArgs> = z.object({ where: MessageWhereInputObjectSchema.optional(), orderBy: z.union([MessageOrderByWithAggregationInputObjectSchema, MessageOrderByWithAggregationInputObjectSchema.array()]).optional(), having: MessageScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(MessageScalarFieldEnumSchema), _count: z.union([ z.literal(true), MessageCountAggregateInputObjectSchema ]).optional(), _min: MessageMinAggregateInputObjectSchema.optional(), _max: MessageMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.MessageGroupByArgs>;

export const MessageGroupByZodSchema = z.object({ where: MessageWhereInputObjectSchema.optional(), orderBy: z.union([MessageOrderByWithAggregationInputObjectSchema, MessageOrderByWithAggregationInputObjectSchema.array()]).optional(), having: MessageScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(MessageScalarFieldEnumSchema), _count: z.union([ z.literal(true), MessageCountAggregateInputObjectSchema ]).optional(), _min: MessageMinAggregateInputObjectSchema.optional(), _max: MessageMaxAggregateInputObjectSchema.optional() }).strict();