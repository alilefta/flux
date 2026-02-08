import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { ChannelSelectObjectSchema as ChannelSelectObjectSchema } from './objects/ChannelSelect.schema';
import { ChannelUpdateManyMutationInputObjectSchema as ChannelUpdateManyMutationInputObjectSchema } from './objects/ChannelUpdateManyMutationInput.schema';
import { ChannelWhereInputObjectSchema as ChannelWhereInputObjectSchema } from './objects/ChannelWhereInput.schema';

export const ChannelUpdateManyAndReturnSchema: z.ZodType<Prisma.ChannelUpdateManyAndReturnArgs> = z.object({ select: ChannelSelectObjectSchema.optional(), data: ChannelUpdateManyMutationInputObjectSchema, where: ChannelWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ChannelUpdateManyAndReturnArgs>;

export const ChannelUpdateManyAndReturnZodSchema = z.object({ select: ChannelSelectObjectSchema.optional(), data: ChannelUpdateManyMutationInputObjectSchema, where: ChannelWhereInputObjectSchema.optional() }).strict();