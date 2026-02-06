import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { DirectMessageSelectObjectSchema as DirectMessageSelectObjectSchema } from './objects/DirectMessageSelect.schema';
import { DirectMessageIncludeObjectSchema as DirectMessageIncludeObjectSchema } from './objects/DirectMessageInclude.schema';
import { DirectMessageWhereUniqueInputObjectSchema as DirectMessageWhereUniqueInputObjectSchema } from './objects/DirectMessageWhereUniqueInput.schema';
import { DirectMessageCreateInputObjectSchema as DirectMessageCreateInputObjectSchema } from './objects/DirectMessageCreateInput.schema';
import { DirectMessageUncheckedCreateInputObjectSchema as DirectMessageUncheckedCreateInputObjectSchema } from './objects/DirectMessageUncheckedCreateInput.schema';
import { DirectMessageUpdateInputObjectSchema as DirectMessageUpdateInputObjectSchema } from './objects/DirectMessageUpdateInput.schema';
import { DirectMessageUncheckedUpdateInputObjectSchema as DirectMessageUncheckedUpdateInputObjectSchema } from './objects/DirectMessageUncheckedUpdateInput.schema';

export const DirectMessageUpsertOneSchema: z.ZodType<Prisma.DirectMessageUpsertArgs> = z.object({ select: DirectMessageSelectObjectSchema.optional(), include: DirectMessageIncludeObjectSchema.optional(), where: DirectMessageWhereUniqueInputObjectSchema, create: z.union([ DirectMessageCreateInputObjectSchema, DirectMessageUncheckedCreateInputObjectSchema ]), update: z.union([ DirectMessageUpdateInputObjectSchema, DirectMessageUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.DirectMessageUpsertArgs>;

export const DirectMessageUpsertOneZodSchema = z.object({ select: DirectMessageSelectObjectSchema.optional(), include: DirectMessageIncludeObjectSchema.optional(), where: DirectMessageWhereUniqueInputObjectSchema, create: z.union([ DirectMessageCreateInputObjectSchema, DirectMessageUncheckedCreateInputObjectSchema ]), update: z.union([ DirectMessageUpdateInputObjectSchema, DirectMessageUncheckedUpdateInputObjectSchema ]) }).strict();