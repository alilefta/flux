import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { AuditLogActionSchema } from '../enums/AuditLogAction.schema';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

const makeSchema = () => z.object({
  id: z.string().optional(),
  action: AuditLogActionSchema,
  serverId: z.string(),
  userId: z.string(),
  targetId: z.string().optional().nullable(),
  metadata: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  createdAt: z.coerce.date().optional()
}).strict();
export const AuditLogCreateManyInputObjectSchema: z.ZodType<Prisma.AuditLogCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.AuditLogCreateManyInput>;
export const AuditLogCreateManyInputObjectZodSchema = makeSchema();
