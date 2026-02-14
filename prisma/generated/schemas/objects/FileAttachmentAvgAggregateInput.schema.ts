import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  size: z.literal(true).optional()
}).strict();
export const FileAttachmentAvgAggregateInputObjectSchema: z.ZodType<Prisma.FileAttachmentAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.FileAttachmentAvgAggregateInputType>;
export const FileAttachmentAvgAggregateInputObjectZodSchema = makeSchema();
