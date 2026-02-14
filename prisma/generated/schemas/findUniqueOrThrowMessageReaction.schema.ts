import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { MessageReactionSelectObjectSchema as MessageReactionSelectObjectSchema } from './objects/MessageReactionSelect.schema';
import { MessageReactionIncludeObjectSchema as MessageReactionIncludeObjectSchema } from './objects/MessageReactionInclude.schema';
import { MessageReactionWhereUniqueInputObjectSchema as MessageReactionWhereUniqueInputObjectSchema } from './objects/MessageReactionWhereUniqueInput.schema';

export const MessageReactionFindUniqueOrThrowSchema: z.ZodType<Prisma.MessageReactionFindUniqueOrThrowArgs> = z.object({ select: MessageReactionSelectObjectSchema.optional(), include: MessageReactionIncludeObjectSchema.optional(), where: MessageReactionWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.MessageReactionFindUniqueOrThrowArgs>;

export const MessageReactionFindUniqueOrThrowZodSchema = z.object({ select: MessageReactionSelectObjectSchema.optional(), include: MessageReactionIncludeObjectSchema.optional(), where: MessageReactionWhereUniqueInputObjectSchema }).strict();