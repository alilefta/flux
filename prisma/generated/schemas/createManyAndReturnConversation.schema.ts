import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { ConversationSelectObjectSchema as ConversationSelectObjectSchema } from './objects/ConversationSelect.schema';
import { ConversationCreateManyInputObjectSchema as ConversationCreateManyInputObjectSchema } from './objects/ConversationCreateManyInput.schema';

export const ConversationCreateManyAndReturnSchema: z.ZodType<Prisma.ConversationCreateManyAndReturnArgs> = z.object({ select: ConversationSelectObjectSchema.optional(), data: z.union([ ConversationCreateManyInputObjectSchema, z.array(ConversationCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.ConversationCreateManyAndReturnArgs>;

export const ConversationCreateManyAndReturnZodSchema = z.object({ select: ConversationSelectObjectSchema.optional(), data: z.union([ ConversationCreateManyInputObjectSchema, z.array(ConversationCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();