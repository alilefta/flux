import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  size: z.literal(true).optional()
}).strict();
export const FileAttachmentSumAggregateInputObjectSchema: z.ZodType<Prisma.FileAttachmentSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.FileAttachmentSumAggregateInputType>;
export const FileAttachmentSumAggregateInputObjectZodSchema = makeSchema();
