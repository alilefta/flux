import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { DirectMessageSelectObjectSchema as DirectMessageSelectObjectSchema } from './objects/DirectMessageSelect.schema';
import { DirectMessageIncludeObjectSchema as DirectMessageIncludeObjectSchema } from './objects/DirectMessageInclude.schema';
import { DirectMessageWhereUniqueInputObjectSchema as DirectMessageWhereUniqueInputObjectSchema } from './objects/DirectMessageWhereUniqueInput.schema';

export const DirectMessageFindUniqueOrThrowSchema: z.ZodType<Prisma.DirectMessageFindUniqueOrThrowArgs> = z.object({ select: DirectMessageSelectObjectSchema.optional(), include: DirectMessageIncludeObjectSchema.optional(), where: DirectMessageWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.DirectMessageFindUniqueOrThrowArgs>;

export const DirectMessageFindUniqueOrThrowZodSchema = z.object({ select: DirectMessageSelectObjectSchema.optional(), include: DirectMessageIncludeObjectSchema.optional(), where: DirectMessageWhereUniqueInputObjectSchema }).strict();