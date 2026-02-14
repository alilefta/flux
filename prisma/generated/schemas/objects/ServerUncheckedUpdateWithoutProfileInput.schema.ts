import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { MemberUncheckedUpdateManyWithoutServerNestedInputObjectSchema as MemberUncheckedUpdateManyWithoutServerNestedInputObjectSchema } from './MemberUncheckedUpdateManyWithoutServerNestedInput.schema';
import { ChannelUncheckedUpdateManyWithoutServerNestedInputObjectSchema as ChannelUncheckedUpdateManyWithoutServerNestedInputObjectSchema } from './ChannelUncheckedUpdateManyWithoutServerNestedInput.schema';
import { ChannelCategoryUncheckedUpdateManyWithoutServerNestedInputObjectSchema as ChannelCategoryUncheckedUpdateManyWithoutServerNestedInputObjectSchema } from './ChannelCategoryUncheckedUpdateManyWithoutServerNestedInput.schema';
import { AuditLogUncheckedUpdateManyWithoutServerNestedInputObjectSchema as AuditLogUncheckedUpdateManyWithoutServerNestedInputObjectSchema } from './AuditLogUncheckedUpdateManyWithoutServerNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  imageUrl: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  inviteCode: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  description: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  memberCount: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  members: z.lazy(() => MemberUncheckedUpdateManyWithoutServerNestedInputObjectSchema).optional(),
  channels: z.lazy(() => ChannelUncheckedUpdateManyWithoutServerNestedInputObjectSchema).optional(),
  categories: z.lazy(() => ChannelCategoryUncheckedUpdateManyWithoutServerNestedInputObjectSchema).optional(),
  auditLog: z.lazy(() => AuditLogUncheckedUpdateManyWithoutServerNestedInputObjectSchema).optional()
}).strict();
export const ServerUncheckedUpdateWithoutProfileInputObjectSchema: z.ZodType<Prisma.ServerUncheckedUpdateWithoutProfileInput> = makeSchema() as unknown as z.ZodType<Prisma.ServerUncheckedUpdateWithoutProfileInput>;
export const ServerUncheckedUpdateWithoutProfileInputObjectZodSchema = makeSchema();
