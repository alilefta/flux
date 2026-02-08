import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { DirectMessageSelectObjectSchema as DirectMessageSelectObjectSchema } from './objects/DirectMessageSelect.schema';
import { DirectMessageIncludeObjectSchema as DirectMessageIncludeObjectSchema } from './objects/DirectMessageInclude.schema';
import { DirectMessageWhereUniqueInputObjectSchema as DirectMessageWhereUniqueInputObjectSchema } from './objects/DirectMessageWhereUniqueInput.schema';

export const DirectMessageFindUniqueSchema: z.ZodType<Prisma.DirectMessageFindUniqueArgs> = z.object({ select: DirectMessageSelectObjectSchema.optional(), include: DirectMessageIncludeObjectSchema.optional(), where: DirectMessageWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.DirectMessageFindUniqueArgs>;

export const DirectMessageFindUniqueZodSchema = z.object({ select: DirectMessageSelectObjectSchema.optional(), include: DirectMessageIncludeObjectSchema.optional(), where: DirectMessageWhereUniqueInputObjectSchema }).strict();