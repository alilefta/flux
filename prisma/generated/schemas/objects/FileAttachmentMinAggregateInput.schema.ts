import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  url: z.literal(true).optional(),
  name: z.literal(true).optional(),
  type: z.literal(true).optional(),
  size: z.literal(true).optional(),
  messageId: z.literal(true).optional(),
  directMessageId: z.literal(true).optional(),
  createdAt: z.literal(true).optional()
}).strict();
export const FileAttachmentMinAggregateInputObjectSchema: z.ZodType<Prisma.FileAttachmentMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.FileAttachmentMinAggregateInputType>;
export const FileAttachmentMinAggregateInputObjectZodSchema = makeSchema();
