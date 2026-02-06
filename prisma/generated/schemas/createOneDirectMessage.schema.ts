import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { DirectMessageSelectObjectSchema as DirectMessageSelectObjectSchema } from './objects/DirectMessageSelect.schema';
import { DirectMessageIncludeObjectSchema as DirectMessageIncludeObjectSchema } from './objects/DirectMessageInclude.schema';
import { DirectMessageCreateInputObjectSchema as DirectMessageCreateInputObjectSchema } from './objects/DirectMessageCreateInput.schema';
import { DirectMessageUncheckedCreateInputObjectSchema as DirectMessageUncheckedCreateInputObjectSchema } from './objects/DirectMessageUncheckedCreateInput.schema';

export const DirectMessageCreateOneSchema: z.ZodType<Prisma.DirectMessageCreateArgs> = z.object({ select: DirectMessageSelectObjectSchema.optional(), include: DirectMessageIncludeObjectSchema.optional(), data: z.union([DirectMessageCreateInputObjectSchema, DirectMessageUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.DirectMessageCreateArgs>;

export const DirectMessageCreateOneZodSchema = z.object({ select: DirectMessageSelectObjectSchema.optional(), include: DirectMessageIncludeObjectSchema.optional(), data: z.union([DirectMessageCreateInputObjectSchema, DirectMessageUncheckedCreateInputObjectSchema]) }).strict();