import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { ChannelSelectObjectSchema as ChannelSelectObjectSchema } from './objects/ChannelSelect.schema';
import { ChannelIncludeObjectSchema as ChannelIncludeObjectSchema } from './objects/ChannelInclude.schema';
import { ChannelWhereUniqueInputObjectSchema as ChannelWhereUniqueInputObjectSchema } from './objects/ChannelWhereUniqueInput.schema';
import { ChannelCreateInputObjectSchema as ChannelCreateInputObjectSchema } from './objects/ChannelCreateInput.schema';
import { ChannelUncheckedCreateInputObjectSchema as ChannelUncheckedCreateInputObjectSchema } from './objects/ChannelUncheckedCreateInput.schema';
import { ChannelUpdateInputObjectSchema as ChannelUpdateInputObjectSchema } from './objects/ChannelUpdateInput.schema';
import { ChannelUncheckedUpdateInputObjectSchema as ChannelUncheckedUpdateInputObjectSchema } from './objects/ChannelUncheckedUpdateInput.schema';

export const ChannelUpsertOneSchema: z.ZodType<Prisma.ChannelUpsertArgs> = z.object({ select: ChannelSelectObjectSchema.optional(), include: ChannelIncludeObjectSchema.optional(), where: ChannelWhereUniqueInputObjectSchema, create: z.union([ ChannelCreateInputObjectSchema, ChannelUncheckedCreateInputObjectSchema ]), update: z.union([ ChannelUpdateInputObjectSchema, ChannelUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.ChannelUpsertArgs>;

export const ChannelUpsertOneZodSchema = z.object({ select: ChannelSelectObjectSchema.optional(), include: ChannelIncludeObjectSchema.optional(), where: ChannelWhereUniqueInputObjectSchema, create: z.union([ ChannelCreateInputObjectSchema, ChannelUncheckedCreateInputObjectSchema ]), update: z.union([ ChannelUpdateInputObjectSchema, ChannelUncheckedUpdateInputObjectSchema ]) }).strict();