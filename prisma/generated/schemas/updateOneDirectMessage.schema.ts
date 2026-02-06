import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { DirectMessageSelectObjectSchema as DirectMessageSelectObjectSchema } from './objects/DirectMessageSelect.schema';
import { DirectMessageIncludeObjectSchema as DirectMessageIncludeObjectSchema } from './objects/DirectMessageInclude.schema';
import { DirectMessageUpdateInputObjectSchema as DirectMessageUpdateInputObjectSchema } from './objects/DirectMessageUpdateInput.schema';
import { DirectMessageUncheckedUpdateInputObjectSchema as DirectMessageUncheckedUpdateInputObjectSchema } from './objects/DirectMessageUncheckedUpdateInput.schema';
import { DirectMessageWhereUniqueInputObjectSchema as DirectMessageWhereUniqueInputObjectSchema } from './objects/DirectMessageWhereUniqueInput.schema';

export const DirectMessageUpdateOneSchema: z.ZodType<Prisma.DirectMessageUpdateArgs> = z.object({ select: DirectMessageSelectObjectSchema.optional(), include: DirectMessageIncludeObjectSchema.optional(), data: z.union([DirectMessageUpdateInputObjectSchema, DirectMessageUncheckedUpdateInputObjectSchema]), where: DirectMessageWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.DirectMessageUpdateArgs>;

export const DirectMessageUpdateOneZodSchema = z.object({ select: DirectMessageSelectObjectSchema.optional(), include: DirectMessageIncludeObjectSchema.optional(), data: z.union([DirectMessageUpdateInputObjectSchema, DirectMessageUncheckedUpdateInputObjectSchema]), where: DirectMessageWhereUniqueInputObjectSchema }).strict();