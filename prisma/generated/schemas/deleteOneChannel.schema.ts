import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { ChannelSelectObjectSchema as ChannelSelectObjectSchema } from './objects/ChannelSelect.schema';
import { ChannelIncludeObjectSchema as ChannelIncludeObjectSchema } from './objects/ChannelInclude.schema';
import { ChannelWhereUniqueInputObjectSchema as ChannelWhereUniqueInputObjectSchema } from './objects/ChannelWhereUniqueInput.schema';

export const ChannelDeleteOneSchema: z.ZodType<Prisma.ChannelDeleteArgs> = z.object({ select: ChannelSelectObjectSchema.optional(), include: ChannelIncludeObjectSchema.optional(), where: ChannelWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ChannelDeleteArgs>;

export const ChannelDeleteOneZodSchema = z.object({ select: ChannelSelectObjectSchema.optional(), include: ChannelIncludeObjectSchema.optional(), where: ChannelWhereUniqueInputObjectSchema }).strict();