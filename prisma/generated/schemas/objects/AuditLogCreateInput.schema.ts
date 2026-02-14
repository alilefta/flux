import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { AuditLogActionSchema } from '../enums/AuditLogAction.schema';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema';
import { ServerCreateNestedOneWithoutAuditLogInputObjectSchema as ServerCreateNestedOneWithoutAuditLogInputObjectSchema } from './ServerCreateNestedOneWithoutAuditLogInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

const makeSchema = () => z.object({
  id: z.string().optional(),
  action: AuditLogActionSchema,
  userId: z.string(),
  targetId: z.string().optional().nullable(),
  metadata: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  createdAt: z.coerce.date().optional(),
  server: z.lazy(() => ServerCreateNestedOneWithoutAuditLogInputObjectSchema)
}).strict();
export const AuditLogCreateInputObjectSchema: z.ZodType<Prisma.AuditLogCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.AuditLogCreateInput>;
export const AuditLogCreateInputObjectZodSchema = makeSchema();
