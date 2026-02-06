import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { ConversationCreateManyInputObjectSchema as ConversationCreateManyInputObjectSchema } from './objects/ConversationCreateManyInput.schema';

export const ConversationCreateManySchema: z.ZodType<Prisma.ConversationCreateManyArgs> = z.object({ data: z.union([ ConversationCreateManyInputObjectSchema, z.array(ConversationCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.ConversationCreateManyArgs>;

export const ConversationCreateManyZodSchema = z.object({ data: z.union([ ConversationCreateManyInputObjectSchema, z.array(ConversationCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();