import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { MessageReactionUpdateManyMutationInputObjectSchema as MessageReactionUpdateManyMutationInputObjectSchema } from './objects/MessageReactionUpdateManyMutationInput.schema';
import { MessageReactionWhereInputObjectSchema as MessageReactionWhereInputObjectSchema } from './objects/MessageReactionWhereInput.schema';

export const MessageReactionUpdateManySchema: z.ZodType<Prisma.MessageReactionUpdateManyArgs> = z.object({ data: MessageReactionUpdateManyMutationInputObjectSchema, where: MessageReactionWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.MessageReactionUpdateManyArgs>;

export const MessageReactionUpdateManyZodSchema = z.object({ data: MessageReactionUpdateManyMutationInputObjectSchema, where: MessageReactionWhereInputObjectSchema.optional() }).strict();