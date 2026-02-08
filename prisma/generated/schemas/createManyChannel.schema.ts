import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { ChannelCreateManyInputObjectSchema as ChannelCreateManyInputObjectSchema } from './objects/ChannelCreateManyInput.schema';

export const ChannelCreateManySchema: z.ZodType<Prisma.ChannelCreateManyArgs> = z.object({ data: z.union([ ChannelCreateManyInputObjectSchema, z.array(ChannelCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.ChannelCreateManyArgs>;

export const ChannelCreateManyZodSchema = z.object({ data: z.union([ ChannelCreateManyInputObjectSchema, z.array(ChannelCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();