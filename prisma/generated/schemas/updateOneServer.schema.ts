import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { ServerSelectObjectSchema as ServerSelectObjectSchema } from './objects/ServerSelect.schema';
import { ServerIncludeObjectSchema as ServerIncludeObjectSchema } from './objects/ServerInclude.schema';
import { ServerUpdateInputObjectSchema as ServerUpdateInputObjectSchema } from './objects/ServerUpdateInput.schema';
import { ServerUncheckedUpdateInputObjectSchema as ServerUncheckedUpdateInputObjectSchema } from './objects/ServerUncheckedUpdateInput.schema';
import { ServerWhereUniqueInputObjectSchema as ServerWhereUniqueInputObjectSchema } from './objects/ServerWhereUniqueInput.schema';

export const ServerUpdateOneSchema: z.ZodType<Prisma.ServerUpdateArgs> = z.object({ select: ServerSelectObjectSchema.optional(), include: ServerIncludeObjectSchema.optional(), data: z.union([ServerUpdateInputObjectSchema, ServerUncheckedUpdateInputObjectSchema]), where: ServerWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ServerUpdateArgs>;

export const ServerUpdateOneZodSchema = z.object({ select: ServerSelectObjectSchema.optional(), include: ServerIncludeObjectSchema.optional(), data: z.union([ServerUpdateInputObjectSchema, ServerUncheckedUpdateInputObjectSchema]), where: ServerWhereUniqueInputObjectSchema }).strict();