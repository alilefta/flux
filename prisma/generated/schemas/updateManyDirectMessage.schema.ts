import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { DirectMessageUpdateManyMutationInputObjectSchema as DirectMessageUpdateManyMutationInputObjectSchema } from './objects/DirectMessageUpdateManyMutationInput.schema';
import { DirectMessageWhereInputObjectSchema as DirectMessageWhereInputObjectSchema } from './objects/DirectMessageWhereInput.schema';

export const DirectMessageUpdateManySchema: z.ZodType<Prisma.DirectMessageUpdateManyArgs> = z.object({ data: DirectMessageUpdateManyMutationInputObjectSchema, where: DirectMessageWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.DirectMessageUpdateManyArgs>;

export const DirectMessageUpdateManyZodSchema = z.object({ data: DirectMessageUpdateManyMutationInputObjectSchema, where: DirectMessageWhereInputObjectSchema.optional() }).strict();