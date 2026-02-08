import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { ServerUpdateManyMutationInputObjectSchema as ServerUpdateManyMutationInputObjectSchema } from './objects/ServerUpdateManyMutationInput.schema';
import { ServerWhereInputObjectSchema as ServerWhereInputObjectSchema } from './objects/ServerWhereInput.schema';

export const ServerUpdateManySchema: z.ZodType<Prisma.ServerUpdateManyArgs> = z.object({ data: ServerUpdateManyMutationInputObjectSchema, where: ServerWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ServerUpdateManyArgs>;

export const ServerUpdateManyZodSchema = z.object({ data: ServerUpdateManyMutationInputObjectSchema, where: ServerWhereInputObjectSchema.optional() }).strict();