import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { MessageReactionSelectObjectSchema as MessageReactionSelectObjectSchema } from './objects/MessageReactionSelect.schema';
import { MessageReactionIncludeObjectSchema as MessageReactionIncludeObjectSchema } from './objects/MessageReactionInclude.schema';
import { MessageReactionWhereUniqueInputObjectSchema as MessageReactionWhereUniqueInputObjectSchema } from './objects/MessageReactionWhereUniqueInput.schema';

export const MessageReactionDeleteOneSchema: z.ZodType<Prisma.MessageReactionDeleteArgs> = z.object({ select: MessageReactionSelectObjectSchema.optional(), include: MessageReactionIncludeObjectSchema.optional(), where: MessageReactionWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.MessageReactionDeleteArgs>;

export const MessageReactionDeleteOneZodSchema = z.object({ select: MessageReactionSelectObjectSchema.optional(), include: MessageReactionIncludeObjectSchema.optional(), where: MessageReactionWhereUniqueInputObjectSchema }).strict();