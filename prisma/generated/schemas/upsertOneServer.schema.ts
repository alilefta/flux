import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { ServerSelectObjectSchema as ServerSelectObjectSchema } from './objects/ServerSelect.schema';
import { ServerIncludeObjectSchema as ServerIncludeObjectSchema } from './objects/ServerInclude.schema';
import { ServerWhereUniqueInputObjectSchema as ServerWhereUniqueInputObjectSchema } from './objects/ServerWhereUniqueInput.schema';
import { ServerCreateInputObjectSchema as ServerCreateInputObjectSchema } from './objects/ServerCreateInput.schema';
import { ServerUncheckedCreateInputObjectSchema as ServerUncheckedCreateInputObjectSchema } from './objects/ServerUncheckedCreateInput.schema';
import { ServerUpdateInputObjectSchema as ServerUpdateInputObjectSchema } from './objects/ServerUpdateInput.schema';
import { ServerUncheckedUpdateInputObjectSchema as ServerUncheckedUpdateInputObjectSchema } from './objects/ServerUncheckedUpdateInput.schema';

export const ServerUpsertOneSchema: z.ZodType<Prisma.ServerUpsertArgs> = z.object({ select: ServerSelectObjectSchema.optional(), include: ServerIncludeObjectSchema.optional(), where: ServerWhereUniqueInputObjectSchema, create: z.union([ ServerCreateInputObjectSchema, ServerUncheckedCreateInputObjectSchema ]), update: z.union([ ServerUpdateInputObjectSchema, ServerUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.ServerUpsertArgs>;

export const ServerUpsertOneZodSchema = z.object({ select: ServerSelectObjectSchema.optional(), include: ServerIncludeObjectSchema.optional(), where: ServerWhereUniqueInputObjectSchema, create: z.union([ ServerCreateInputObjectSchema, ServerUncheckedCreateInputObjectSchema ]), update: z.union([ ServerUpdateInputObjectSchema, ServerUncheckedUpdateInputObjectSchema ]) }).strict();