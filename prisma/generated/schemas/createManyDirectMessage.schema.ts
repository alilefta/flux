import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { DirectMessageCreateManyInputObjectSchema as DirectMessageCreateManyInputObjectSchema } from './objects/DirectMessageCreateManyInput.schema';

export const DirectMessageCreateManySchema: z.ZodType<Prisma.DirectMessageCreateManyArgs> = z.object({ data: z.union([ DirectMessageCreateManyInputObjectSchema, z.array(DirectMessageCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.DirectMessageCreateManyArgs>;

export const DirectMessageCreateManyZodSchema = z.object({ data: z.union([ DirectMessageCreateManyInputObjectSchema, z.array(DirectMessageCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();