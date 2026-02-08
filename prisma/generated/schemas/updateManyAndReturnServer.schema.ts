import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { ServerSelectObjectSchema as ServerSelectObjectSchema } from './objects/ServerSelect.schema';
import { ServerUpdateManyMutationInputObjectSchema as ServerUpdateManyMutationInputObjectSchema } from './objects/ServerUpdateManyMutationInput.schema';
import { ServerWhereInputObjectSchema as ServerWhereInputObjectSchema } from './objects/ServerWhereInput.schema';

export const ServerUpdateManyAndReturnSchema: z.ZodType<Prisma.ServerUpdateManyAndReturnArgs> = z.object({ select: ServerSelectObjectSchema.optional(), data: ServerUpdateManyMutationInputObjectSchema, where: ServerWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ServerUpdateManyAndReturnArgs>;

export const ServerUpdateManyAndReturnZodSchema = z.object({ select: ServerSelectObjectSchema.optional(), data: ServerUpdateManyMutationInputObjectSchema, where: ServerWhereInputObjectSchema.optional() }).strict();