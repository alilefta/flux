import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { MessageReactionSelectObjectSchema as MessageReactionSelectObjectSchema } from './objects/MessageReactionSelect.schema';
import { MessageReactionCreateManyInputObjectSchema as MessageReactionCreateManyInputObjectSchema } from './objects/MessageReactionCreateManyInput.schema';

export const MessageReactionCreateManyAndReturnSchema: z.ZodType<Prisma.MessageReactionCreateManyAndReturnArgs> = z.object({ select: MessageReactionSelectObjectSchema.optional(), data: z.union([ MessageReactionCreateManyInputObjectSchema, z.array(MessageReactionCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.MessageReactionCreateManyAndReturnArgs>;

export const MessageReactionCreateManyAndReturnZodSchema = z.object({ select: MessageReactionSelectObjectSchema.optional(), data: z.union([ MessageReactionCreateManyInputObjectSchema, z.array(MessageReactionCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();