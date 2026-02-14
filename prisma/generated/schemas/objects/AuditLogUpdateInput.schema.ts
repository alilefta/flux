import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { AuditLogActionSchema } from '../enums/AuditLogAction.schema';
import { EnumAuditLogActionFieldUpdateOperationsInputObjectSchema as EnumAuditLogActionFieldUpdateOperationsInputObjectSchema } from './EnumAuditLogActionFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { ServerUpdateOneRequiredWithoutAuditLogNestedInputObjectSchema as ServerUpdateOneRequiredWithoutAuditLogNestedInputObjectSchema } from './ServerUpdateOneRequiredWithoutAuditLogNestedInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  action: z.union([AuditLogActionSchema, z.lazy(() => EnumAuditLogActionFieldUpdateOperationsInputObjectSchema)]).optional(),
  userId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  targetId: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  metadata: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  server: z.lazy(() => ServerUpdateOneRequiredWithoutAuditLogNestedInputObjectSchema).optional()
}).strict();
export const AuditLogUpdateInputObjectSchema: z.ZodType<Prisma.AuditLogUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.AuditLogUpdateInput>;
export const AuditLogUpdateInputObjectZodSchema = makeSchema();
