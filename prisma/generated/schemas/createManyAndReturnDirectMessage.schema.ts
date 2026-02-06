import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { DirectMessageSelectObjectSchema as DirectMessageSelectObjectSchema } from './objects/DirectMessageSelect.schema';
import { DirectMessageCreateManyInputObjectSchema as DirectMessageCreateManyInputObjectSchema } from './objects/DirectMessageCreateManyInput.schema';

export const DirectMessageCreateManyAndReturnSchema: z.ZodType<Prisma.DirectMessageCreateManyAndReturnArgs> = z.object({ select: DirectMessageSelectObjectSchema.optional(), data: z.union([ DirectMessageCreateManyInputObjectSchema, z.array(DirectMessageCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.DirectMessageCreateManyAndReturnArgs>;

export const DirectMessageCreateManyAndReturnZodSchema = z.object({ select: DirectMessageSelectObjectSchema.optional(), data: z.union([ DirectMessageCreateManyInputObjectSchema, z.array(DirectMessageCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();