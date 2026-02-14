import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  url: z.literal(true).optional(),
  name: z.literal(true).optional(),
  type: z.literal(true).optional(),
  size: z.literal(true).optional(),
  messageId: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const FileAttachmentCountAggregateInputObjectSchema: z.ZodType<Prisma.FileAttachmentCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.FileAttachmentCountAggregateInputType>;
export const FileAttachmentCountAggregateInputObjectZodSchema = makeSchema();
