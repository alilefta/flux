import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { DirectMessageSelectObjectSchema as DirectMessageSelectObjectSchema } from './objects/DirectMessageSelect.schema';
import { DirectMessageIncludeObjectSchema as DirectMessageIncludeObjectSchema } from './objects/DirectMessageInclude.schema';
import { DirectMessageWhereUniqueInputObjectSchema as DirectMessageWhereUniqueInputObjectSchema } from './objects/DirectMessageWhereUniqueInput.schema';

export const DirectMessageDeleteOneSchema: z.ZodType<Prisma.DirectMessageDeleteArgs> = z.object({ select: DirectMessageSelectObjectSchema.optional(), include: DirectMessageIncludeObjectSchema.optional(), where: DirectMessageWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.DirectMessageDeleteArgs>;

export const DirectMessageDeleteOneZodSchema = z.object({ select: DirectMessageSelectObjectSchema.optional(), include: DirectMessageIncludeObjectSchema.optional(), where: DirectMessageWhereUniqueInputObjectSchema }).strict();