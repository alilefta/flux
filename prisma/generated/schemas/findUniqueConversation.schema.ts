import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { ConversationSelectObjectSchema as ConversationSelectObjectSchema } from './objects/ConversationSelect.schema';
import { ConversationIncludeObjectSchema as ConversationIncludeObjectSchema } from './objects/ConversationInclude.schema';
import { ConversationWhereUniqueInputObjectSchema as ConversationWhereUniqueInputObjectSchema } from './objects/ConversationWhereUniqueInput.schema';

export const ConversationFindUniqueSchema: z.ZodType<Prisma.ConversationFindUniqueArgs> = z.object({ select: ConversationSelectObjectSchema.optional(), include: ConversationIncludeObjectSchema.optional(), where: ConversationWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ConversationFindUniqueArgs>;

export const ConversationFindUniqueZodSchema = z.object({ select: ConversationSelectObjectSchema.optional(), include: ConversationIncludeObjectSchema.optional(), where: ConversationWhereUniqueInputObjectSchema }).strict();