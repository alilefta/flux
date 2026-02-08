import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { ConversationSelectObjectSchema as ConversationSelectObjectSchema } from './objects/ConversationSelect.schema';
import { ConversationUpdateManyMutationInputObjectSchema as ConversationUpdateManyMutationInputObjectSchema } from './objects/ConversationUpdateManyMutationInput.schema';
import { ConversationWhereInputObjectSchema as ConversationWhereInputObjectSchema } from './objects/ConversationWhereInput.schema';

export const ConversationUpdateManyAndReturnSchema: z.ZodType<Prisma.ConversationUpdateManyAndReturnArgs> = z.object({ select: ConversationSelectObjectSchema.optional(), data: ConversationUpdateManyMutationInputObjectSchema, where: ConversationWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ConversationUpdateManyAndReturnArgs>;

export const ConversationUpdateManyAndReturnZodSchema = z.object({ select: ConversationSelectObjectSchema.optional(), data: ConversationUpdateManyMutationInputObjectSchema, where: ConversationWhereInputObjectSchema.optional() }).strict();