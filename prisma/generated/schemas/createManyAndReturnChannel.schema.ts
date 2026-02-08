import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { ChannelSelectObjectSchema as ChannelSelectObjectSchema } from './objects/ChannelSelect.schema';
import { ChannelCreateManyInputObjectSchema as ChannelCreateManyInputObjectSchema } from './objects/ChannelCreateManyInput.schema';

export const ChannelCreateManyAndReturnSchema: z.ZodType<Prisma.ChannelCreateManyAndReturnArgs> = z.object({ select: ChannelSelectObjectSchema.optional(), data: z.union([ ChannelCreateManyInputObjectSchema, z.array(ChannelCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.ChannelCreateManyAndReturnArgs>;

export const ChannelCreateManyAndReturnZodSchema = z.object({ select: ChannelSelectObjectSchema.optional(), data: z.union([ ChannelCreateManyInputObjectSchema, z.array(ChannelCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();