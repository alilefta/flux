import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { ConversationSelectObjectSchema as ConversationSelectObjectSchema } from './objects/ConversationSelect.schema';
import { ConversationIncludeObjectSchema as ConversationIncludeObjectSchema } from './objects/ConversationInclude.schema';
import { ConversationUpdateInputObjectSchema as ConversationUpdateInputObjectSchema } from './objects/ConversationUpdateInput.schema';
import { ConversationUncheckedUpdateInputObjectSchema as ConversationUncheckedUpdateInputObjectSchema } from './objects/ConversationUncheckedUpdateInput.schema';
import { ConversationWhereUniqueInputObjectSchema as ConversationWhereUniqueInputObjectSchema } from './objects/ConversationWhereUniqueInput.schema';

export const ConversationUpdateOneSchema: z.ZodType<Prisma.ConversationUpdateArgs> = z.object({ select: ConversationSelectObjectSchema.optional(), include: ConversationIncludeObjectSchema.optional(), data: z.union([ConversationUpdateInputObjectSchema, ConversationUncheckedUpdateInputObjectSchema]), where: ConversationWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ConversationUpdateArgs>;

export const ConversationUpdateOneZodSchema = z.object({ select: ConversationSelectObjectSchema.optional(), include: ConversationIncludeObjectSchema.optional(), data: z.union([ConversationUpdateInputObjectSchema, ConversationUncheckedUpdateInputObjectSchema]), where: ConversationWhereUniqueInputObjectSchema }).strict();