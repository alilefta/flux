import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { ServerCreateManyInputObjectSchema as ServerCreateManyInputObjectSchema } from './objects/ServerCreateManyInput.schema';

export const ServerCreateManySchema: z.ZodType<Prisma.ServerCreateManyArgs> = z.object({ data: z.union([ ServerCreateManyInputObjectSchema, z.array(ServerCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.ServerCreateManyArgs>;

export const ServerCreateManyZodSchema = z.object({ data: z.union([ ServerCreateManyInputObjectSchema, z.array(ServerCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();