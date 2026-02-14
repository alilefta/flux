import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { MessageReactionSelectObjectSchema as MessageReactionSelectObjectSchema } from './objects/MessageReactionSelect.schema';
import { MessageReactionIncludeObjectSchema as MessageReactionIncludeObjectSchema } from './objects/MessageReactionInclude.schema';
import { MessageReactionWhereUniqueInputObjectSchema as MessageReactionWhereUniqueInputObjectSchema } from './objects/MessageReactionWhereUniqueInput.schema';
import { MessageReactionCreateInputObjectSchema as MessageReactionCreateInputObjectSchema } from './objects/MessageReactionCreateInput.schema';
import { MessageReactionUncheckedCreateInputObjectSchema as MessageReactionUncheckedCreateInputObjectSchema } from './objects/MessageReactionUncheckedCreateInput.schema';
import { MessageReactionUpdateInputObjectSchema as MessageReactionUpdateInputObjectSchema } from './objects/MessageReactionUpdateInput.schema';
import { MessageReactionUncheckedUpdateInputObjectSchema as MessageReactionUncheckedUpdateInputObjectSchema } from './objects/MessageReactionUncheckedUpdateInput.schema';

export const MessageReactionUpsertOneSchema: z.ZodType<Prisma.MessageReactionUpsertArgs> = z.object({ select: MessageReactionSelectObjectSchema.optional(), include: MessageReactionIncludeObjectSchema.optional(), where: MessageReactionWhereUniqueInputObjectSchema, create: z.union([ MessageReactionCreateInputObjectSchema, MessageReactionUncheckedCreateInputObjectSchema ]), update: z.union([ MessageReactionUpdateInputObjectSchema, MessageReactionUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.MessageReactionUpsertArgs>;

export const MessageReactionUpsertOneZodSchema = z.object({ select: MessageReactionSelectObjectSchema.optional(), include: MessageReactionIncludeObjectSchema.optional(), where: MessageReactionWhereUniqueInputObjectSchema, create: z.union([ MessageReactionCreateInputObjectSchema, MessageReactionUncheckedCreateInputObjectSchema ]), update: z.union([ MessageReactionUpdateInputObjectSchema, MessageReactionUncheckedUpdateInputObjectSchema ]) }).strict();