import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { MessageReactionSelectObjectSchema as MessageReactionSelectObjectSchema } from './objects/MessageReactionSelect.schema';
import { MessageReactionIncludeObjectSchema as MessageReactionIncludeObjectSchema } from './objects/MessageReactionInclude.schema';
import { MessageReactionCreateInputObjectSchema as MessageReactionCreateInputObjectSchema } from './objects/MessageReactionCreateInput.schema';
import { MessageReactionUncheckedCreateInputObjectSchema as MessageReactionUncheckedCreateInputObjectSchema } from './objects/MessageReactionUncheckedCreateInput.schema';

export const MessageReactionCreateOneSchema: z.ZodType<Prisma.MessageReactionCreateArgs> = z.object({ select: MessageReactionSelectObjectSchema.optional(), include: MessageReactionIncludeObjectSchema.optional(), data: z.union([MessageReactionCreateInputObjectSchema, MessageReactionUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.MessageReactionCreateArgs>;

export const MessageReactionCreateOneZodSchema = z.object({ select: MessageReactionSelectObjectSchema.optional(), include: MessageReactionIncludeObjectSchema.optional(), data: z.union([MessageReactionCreateInputObjectSchema, MessageReactionUncheckedCreateInputObjectSchema]) }).strict();