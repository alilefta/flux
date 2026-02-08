import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { ServerSelectObjectSchema as ServerSelectObjectSchema } from './objects/ServerSelect.schema';
import { ServerIncludeObjectSchema as ServerIncludeObjectSchema } from './objects/ServerInclude.schema';
import { ServerWhereUniqueInputObjectSchema as ServerWhereUniqueInputObjectSchema } from './objects/ServerWhereUniqueInput.schema';

export const ServerFindUniqueOrThrowSchema: z.ZodType<Prisma.ServerFindUniqueOrThrowArgs> = z.object({ select: ServerSelectObjectSchema.optional(), include: ServerIncludeObjectSchema.optional(), where: ServerWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ServerFindUniqueOrThrowArgs>;

export const ServerFindUniqueOrThrowZodSchema = z.object({ select: ServerSelectObjectSchema.optional(), include: ServerIncludeObjectSchema.optional(), where: ServerWhereUniqueInputObjectSchema }).strict();