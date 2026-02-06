import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { ConversationUpdateManyMutationInputObjectSchema as ConversationUpdateManyMutationInputObjectSchema } from './objects/ConversationUpdateManyMutationInput.schema';
import { ConversationWhereInputObjectSchema as ConversationWhereInputObjectSchema } from './objects/ConversationWhereInput.schema';

export const ConversationUpdateManySchema: z.ZodType<Prisma.ConversationUpdateManyArgs> = z.object({ data: ConversationUpdateManyMutationInputObjectSchema, where: ConversationWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ConversationUpdateManyArgs>;

export const ConversationUpdateManyZodSchema = z.object({ data: ConversationUpdateManyMutationInputObjectSchema, where: ConversationWhereInputObjectSchema.optional() }).strict();