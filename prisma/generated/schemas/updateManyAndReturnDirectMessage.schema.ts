import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { DirectMessageSelectObjectSchema as DirectMessageSelectObjectSchema } from './objects/DirectMessageSelect.schema';
import { DirectMessageUpdateManyMutationInputObjectSchema as DirectMessageUpdateManyMutationInputObjectSchema } from './objects/DirectMessageUpdateManyMutationInput.schema';
import { DirectMessageWhereInputObjectSchema as DirectMessageWhereInputObjectSchema } from './objects/DirectMessageWhereInput.schema';

export const DirectMessageUpdateManyAndReturnSchema: z.ZodType<Prisma.DirectMessageUpdateManyAndReturnArgs> = z.object({ select: DirectMessageSelectObjectSchema.optional(), data: DirectMessageUpdateManyMutationInputObjectSchema, where: DirectMessageWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.DirectMessageUpdateManyAndReturnArgs>;

export const DirectMessageUpdateManyAndReturnZodSchema = z.object({ select: DirectMessageSelectObjectSchema.optional(), data: DirectMessageUpdateManyMutationInputObjectSchema, where: DirectMessageWhereInputObjectSchema.optional() }).strict();