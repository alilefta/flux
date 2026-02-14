import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ServerOrderByWithRelationInputObjectSchema as ServerOrderByWithRelationInputObjectSchema } from './ServerOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  action: SortOrderSchema.optional(),
  serverId: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  targetId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  metadata: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  server: z.lazy(() => ServerOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const AuditLogOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.AuditLogOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.AuditLogOrderByWithRelationInput>;
export const AuditLogOrderByWithRelationInputObjectZodSchema = makeSchema();
