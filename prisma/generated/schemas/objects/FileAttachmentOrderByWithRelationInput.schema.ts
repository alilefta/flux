import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { MessageOrderByWithRelationInputObjectSchema as MessageOrderByWithRelationInputObjectSchema } from './MessageOrderByWithRelationInput.schema';
import { DirectMessageOrderByWithRelationInputObjectSchema as DirectMessageOrderByWithRelationInputObjectSchema } from './DirectMessageOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  url: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  type: SortOrderSchema.optional(),
  size: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  messageId: SortOrderSchema.optional(),
  directMessageId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  message: z.lazy(() => MessageOrderByWithRelationInputObjectSchema).optional(),
  directMessage: z.lazy(() => DirectMessageOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const FileAttachmentOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.FileAttachmentOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.FileAttachmentOrderByWithRelationInput>;
export const FileAttachmentOrderByWithRelationInputObjectZodSchema = makeSchema();
