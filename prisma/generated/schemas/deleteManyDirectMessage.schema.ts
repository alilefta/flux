import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { DirectMessageWhereInputObjectSchema as DirectMessageWhereInputObjectSchema } from './objects/DirectMessageWhereInput.schema';

export const DirectMessageDeleteManySchema: z.ZodType<Prisma.DirectMessageDeleteManyArgs> = z.object({ where: DirectMessageWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.DirectMessageDeleteManyArgs>;

export const DirectMessageDeleteManyZodSchema = z.object({ where: DirectMessageWhereInputObjectSchema.optional() }).strict();