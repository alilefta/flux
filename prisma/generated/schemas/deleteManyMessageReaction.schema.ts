import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { MessageReactionWhereInputObjectSchema as MessageReactionWhereInputObjectSchema } from './objects/MessageReactionWhereInput.schema';

export const MessageReactionDeleteManySchema: z.ZodType<Prisma.MessageReactionDeleteManyArgs> = z.object({ where: MessageReactionWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.MessageReactionDeleteManyArgs>;

export const MessageReactionDeleteManyZodSchema = z.object({ where: MessageReactionWhereInputObjectSchema.optional() }).strict();