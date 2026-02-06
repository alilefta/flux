import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { ChannelSelectObjectSchema as ChannelSelectObjectSchema } from './objects/ChannelSelect.schema';
import { ChannelIncludeObjectSchema as ChannelIncludeObjectSchema } from './objects/ChannelInclude.schema';
import { ChannelWhereUniqueInputObjectSchema as ChannelWhereUniqueInputObjectSchema } from './objects/ChannelWhereUniqueInput.schema';

export const ChannelFindUniqueSchema: z.ZodType<Prisma.ChannelFindUniqueArgs> = z.object({ select: ChannelSelectObjectSchema.optional(), include: ChannelIncludeObjectSchema.optional(), where: ChannelWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ChannelFindUniqueArgs>;

export const ChannelFindUniqueZodSchema = z.object({ select: ChannelSelectObjectSchema.optional(), include: ChannelIncludeObjectSchema.optional(), where: ChannelWhereUniqueInputObjectSchema }).strict();