import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { ServerSelectObjectSchema as ServerSelectObjectSchema } from './objects/ServerSelect.schema';
import { ServerCreateManyInputObjectSchema as ServerCreateManyInputObjectSchema } from './objects/ServerCreateManyInput.schema';

export const ServerCreateManyAndReturnSchema: z.ZodType<Prisma.ServerCreateManyAndReturnArgs> = z.object({ select: ServerSelectObjectSchema.optional(), data: z.union([ ServerCreateManyInputObjectSchema, z.array(ServerCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.ServerCreateManyAndReturnArgs>;

export const ServerCreateManyAndReturnZodSchema = z.object({ select: ServerSelectObjectSchema.optional(), data: z.union([ ServerCreateManyInputObjectSchema, z.array(ServerCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();