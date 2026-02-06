import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { ConversationWhereInputObjectSchema as ConversationWhereInputObjectSchema } from './objects/ConversationWhereInput.schema';

export const ConversationDeleteManySchema: z.ZodType<Prisma.ConversationDeleteManyArgs> = z.object({ where: ConversationWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ConversationDeleteManyArgs>;

export const ConversationDeleteManyZodSchema = z.object({ where: ConversationWhereInputObjectSchema.optional() }).strict();