import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { ConversationSelectObjectSchema as ConversationSelectObjectSchema } from './objects/ConversationSelect.schema';
import { ConversationIncludeObjectSchema as ConversationIncludeObjectSchema } from './objects/ConversationInclude.schema';
import { ConversationCreateInputObjectSchema as ConversationCreateInputObjectSchema } from './objects/ConversationCreateInput.schema';
import { ConversationUncheckedCreateInputObjectSchema as ConversationUncheckedCreateInputObjectSchema } from './objects/ConversationUncheckedCreateInput.schema';

export const ConversationCreateOneSchema: z.ZodType<Prisma.ConversationCreateArgs> = z.object({ select: ConversationSelectObjectSchema.optional(), include: ConversationIncludeObjectSchema.optional(), data: z.union([ConversationCreateInputObjectSchema, ConversationUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.ConversationCreateArgs>;

export const ConversationCreateOneZodSchema = z.object({ select: ConversationSelectObjectSchema.optional(), include: ConversationIncludeObjectSchema.optional(), data: z.union([ConversationCreateInputObjectSchema, ConversationUncheckedCreateInputObjectSchema]) }).strict();