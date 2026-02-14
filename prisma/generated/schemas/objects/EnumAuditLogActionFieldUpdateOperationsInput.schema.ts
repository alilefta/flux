import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { AuditLogActionSchema } from '../enums/AuditLogAction.schema'

const makeSchema = () => z.object({
  set: AuditLogActionSchema.optional()
}).strict();
export const EnumAuditLogActionFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumAuditLogActionFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.EnumAuditLogActionFieldUpdateOperationsInput>;
export const EnumAuditLogActionFieldUpdateOperationsInputObjectZodSchema = makeSchema();
