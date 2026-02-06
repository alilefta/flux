import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { ServerWhereInputObjectSchema as ServerWhereInputObjectSchema } from './objects/ServerWhereInput.schema';

export const ServerDeleteManySchema: z.ZodType<Prisma.ServerDeleteManyArgs> = z.object({ where: ServerWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ServerDeleteManyArgs>;

export const ServerDeleteManyZodSchema = z.object({ where: ServerWhereInputObjectSchema.optional() }).strict();