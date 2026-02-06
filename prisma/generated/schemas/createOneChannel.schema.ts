import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { ChannelSelectObjectSchema as ChannelSelectObjectSchema } from './objects/ChannelSelect.schema';
import { ChannelIncludeObjectSchema as ChannelIncludeObjectSchema } from './objects/ChannelInclude.schema';
import { ChannelCreateInputObjectSchema as ChannelCreateInputObjectSchema } from './objects/ChannelCreateInput.schema';
import { ChannelUncheckedCreateInputObjectSchema as ChannelUncheckedCreateInputObjectSchema } from './objects/ChannelUncheckedCreateInput.schema';

export const ChannelCreateOneSchema: z.ZodType<Prisma.ChannelCreateArgs> = z.object({ select: ChannelSelectObjectSchema.optional(), include: ChannelIncludeObjectSchema.optional(), data: z.union([ChannelCreateInputObjectSchema, ChannelUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.ChannelCreateArgs>;

export const ChannelCreateOneZodSchema = z.object({ select: ChannelSelectObjectSchema.optional(), include: ChannelIncludeObjectSchema.optional(), data: z.union([ChannelCreateInputObjectSchema, ChannelUncheckedCreateInputObjectSchema]) }).strict();