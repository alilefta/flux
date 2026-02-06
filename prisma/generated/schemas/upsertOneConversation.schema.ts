import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { ConversationSelectObjectSchema as ConversationSelectObjectSchema } from './objects/ConversationSelect.schema';
import { ConversationIncludeObjectSchema as ConversationIncludeObjectSchema } from './objects/ConversationInclude.schema';
import { ConversationWhereUniqueInputObjectSchema as ConversationWhereUniqueInputObjectSchema } from './objects/ConversationWhereUniqueInput.schema';
import { ConversationCreateInputObjectSchema as ConversationCreateInputObjectSchema } from './objects/ConversationCreateInput.schema';
import { ConversationUncheckedCreateInputObjectSchema as ConversationUncheckedCreateInputObjectSchema } from './objects/ConversationUncheckedCreateInput.schema';
import { ConversationUpdateInputObjectSchema as ConversationUpdateInputObjectSchema } from './objects/ConversationUpdateInput.schema';
import { ConversationUncheckedUpdateInputObjectSchema as ConversationUncheckedUpdateInputObjectSchema } from './objects/ConversationUncheckedUpdateInput.schema';

export const ConversationUpsertOneSchema: z.ZodType<Prisma.ConversationUpsertArgs> = z.object({ select: ConversationSelectObjectSchema.optional(), include: ConversationIncludeObjectSchema.optional(), where: ConversationWhereUniqueInputObjectSchema, create: z.union([ ConversationCreateInputObjectSchema, ConversationUncheckedCreateInputObjectSchema ]), update: z.union([ ConversationUpdateInputObjectSchema, ConversationUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.ConversationUpsertArgs>;

export const ConversationUpsertOneZodSchema = z.object({ select: ConversationSelectObjectSchema.optional(), include: ConversationIncludeObjectSchema.optional(), where: ConversationWhereUniqueInputObjectSchema, create: z.union([ ConversationCreateInputObjectSchema, ConversationUncheckedCreateInputObjectSchema ]), update: z.union([ ConversationUpdateInputObjectSchema, ConversationUncheckedUpdateInputObjectSchema ]) }).strict();