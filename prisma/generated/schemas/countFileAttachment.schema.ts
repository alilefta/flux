import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { FileAttachmentOrderByWithRelationInputObjectSchema as FileAttachmentOrderByWithRelationInputObjectSchema } from './objects/FileAttachmentOrderByWithRelationInput.schema';
import { FileAttachmentWhereInputObjectSchema as FileAttachmentWhereInputObjectSchema } from './objects/FileAttachmentWhereInput.schema';
import { FileAttachmentWhereUniqueInputObjectSchema as FileAttachmentWhereUniqueInputObjectSchema } from './objects/FileAttachmentWhereUniqueInput.schema';
import { FileAttachmentCountAggregateInputObjectSchema as FileAttachmentCountAggregateInputObjectSchema } from './objects/FileAttachmentCountAggregateInput.schema';

export const FileAttachmentCountSchema: z.ZodType<Prisma.FileAttachmentCountArgs> = z.object({ orderBy: z.union([FileAttachmentOrderByWithRelationInputObjectSchema, FileAttachmentOrderByWithRelationInputObjectSchema.array()]).optional(), where: FileAttachmentWhereInputObjectSchema.optional(), cursor: FileAttachmentWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), FileAttachmentCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.FileAttachmentCountArgs>;

export const FileAttachmentCountZodSchema = z.object({ orderBy: z.union([FileAttachmentOrderByWithRelationInputObjectSchema, FileAttachmentOrderByWithRelationInputObjectSchema.array()]).optional(), where: FileAttachmentWhereInputObjectSchema.optional(), cursor: FileAttachmentWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), FileAttachmentCountAggregateInputObjectSchema ]).optional() }).strict();