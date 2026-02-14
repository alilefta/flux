import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { MessageReactionSelectObjectSchema as MessageReactionSelectObjectSchema } from './objects/MessageReactionSelect.schema';
import { MessageReactionUpdateManyMutationInputObjectSchema as MessageReactionUpdateManyMutationInputObjectSchema } from './objects/MessageReactionUpdateManyMutationInput.schema';
import { MessageReactionWhereInputObjectSchema as MessageReactionWhereInputObjectSchema } from './objects/MessageReactionWhereInput.schema';

export const MessageReactionUpdateManyAndReturnSchema: z.ZodType<Prisma.MessageReactionUpdateManyAndReturnArgs> = z.object({ select: MessageReactionSelectObjectSchema.optional(), data: MessageReactionUpdateManyMutationInputObjectSchema, where: MessageReactionWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.MessageReactionUpdateManyAndReturnArgs>;

export const MessageReactionUpdateManyAndReturnZodSchema = z.object({ select: MessageReactionSelectObjectSchema.optional(), data: MessageReactionUpdateManyMutationInputObjectSchema, where: MessageReactionWhereInputObjectSchema.optional() }).strict();