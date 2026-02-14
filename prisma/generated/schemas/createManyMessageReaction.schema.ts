import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { MessageReactionCreateManyInputObjectSchema as MessageReactionCreateManyInputObjectSchema } from './objects/MessageReactionCreateManyInput.schema';

export const MessageReactionCreateManySchema: z.ZodType<Prisma.MessageReactionCreateManyArgs> = z.object({ data: z.union([ MessageReactionCreateManyInputObjectSchema, z.array(MessageReactionCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.MessageReactionCreateManyArgs>;

export const MessageReactionCreateManyZodSchema = z.object({ data: z.union([ MessageReactionCreateManyInputObjectSchema, z.array(MessageReactionCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();