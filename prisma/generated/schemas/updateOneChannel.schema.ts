import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { ChannelSelectObjectSchema as ChannelSelectObjectSchema } from './objects/ChannelSelect.schema';
import { ChannelIncludeObjectSchema as ChannelIncludeObjectSchema } from './objects/ChannelInclude.schema';
import { ChannelUpdateInputObjectSchema as ChannelUpdateInputObjectSchema } from './objects/ChannelUpdateInput.schema';
import { ChannelUncheckedUpdateInputObjectSchema as ChannelUncheckedUpdateInputObjectSchema } from './objects/ChannelUncheckedUpdateInput.schema';
import { ChannelWhereUniqueInputObjectSchema as ChannelWhereUniqueInputObjectSchema } from './objects/ChannelWhereUniqueInput.schema';

export const ChannelUpdateOneSchema: z.ZodType<Prisma.ChannelUpdateArgs> = z.object({ select: ChannelSelectObjectSchema.optional(), include: ChannelIncludeObjectSchema.optional(), data: z.union([ChannelUpdateInputObjectSchema, ChannelUncheckedUpdateInputObjectSchema]), where: ChannelWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ChannelUpdateArgs>;

export const ChannelUpdateOneZodSchema = z.object({ select: ChannelSelectObjectSchema.optional(), include: ChannelIncludeObjectSchema.optional(), data: z.union([ChannelUpdateInputObjectSchema, ChannelUncheckedUpdateInputObjectSchema]), where: ChannelWhereUniqueInputObjectSchema }).strict();