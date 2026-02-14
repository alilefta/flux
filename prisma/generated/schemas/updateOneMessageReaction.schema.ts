import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { MessageReactionSelectObjectSchema as MessageReactionSelectObjectSchema } from './objects/MessageReactionSelect.schema';
import { MessageReactionIncludeObjectSchema as MessageReactionIncludeObjectSchema } from './objects/MessageReactionInclude.schema';
import { MessageReactionUpdateInputObjectSchema as MessageReactionUpdateInputObjectSchema } from './objects/MessageReactionUpdateInput.schema';
import { MessageReactionUncheckedUpdateInputObjectSchema as MessageReactionUncheckedUpdateInputObjectSchema } from './objects/MessageReactionUncheckedUpdateInput.schema';
import { MessageReactionWhereUniqueInputObjectSchema as MessageReactionWhereUniqueInputObjectSchema } from './objects/MessageReactionWhereUniqueInput.schema';

export const MessageReactionUpdateOneSchema: z.ZodType<Prisma.MessageReactionUpdateArgs> = z.object({ select: MessageReactionSelectObjectSchema.optional(), include: MessageReactionIncludeObjectSchema.optional(), data: z.union([MessageReactionUpdateInputObjectSchema, MessageReactionUncheckedUpdateInputObjectSchema]), where: MessageReactionWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.MessageReactionUpdateArgs>;

export const MessageReactionUpdateOneZodSchema = z.object({ select: MessageReactionSelectObjectSchema.optional(), include: MessageReactionIncludeObjectSchema.optional(), data: z.union([MessageReactionUpdateInputObjectSchema, MessageReactionUncheckedUpdateInputObjectSchema]), where: MessageReactionWhereUniqueInputObjectSchema }).strict();