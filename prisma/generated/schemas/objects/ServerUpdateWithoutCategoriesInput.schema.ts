import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { ProfileUpdateOneRequiredWithoutServersNestedInputObjectSchema as ProfileUpdateOneRequiredWithoutServersNestedInputObjectSchema } from './ProfileUpdateOneRequiredWithoutServersNestedInput.schema';
import { MemberUpdateManyWithoutServerNestedInputObjectSchema as MemberUpdateManyWithoutServerNestedInputObjectSchema } from './MemberUpdateManyWithoutServerNestedInput.schema';
import { ChannelUpdateManyWithoutServerNestedInputObjectSchema as ChannelUpdateManyWithoutServerNestedInputObjectSchema } from './ChannelUpdateManyWithoutServerNestedInput.schema';
import { AuditLogUpdateManyWithoutServerNestedInputObjectSchema as AuditLogUpdateManyWithoutServerNestedInputObjectSchema } from './AuditLogUpdateManyWithoutServerNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  imageUrl: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  inviteCode: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  description: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  memberCount: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  profile: z.lazy(() => ProfileUpdateOneRequiredWithoutServersNestedInputObjectSchema).optional(),
  members: z.lazy(() => MemberUpdateManyWithoutServerNestedInputObjectSchema).optional(),
  channels: z.lazy(() => ChannelUpdateManyWithoutServerNestedInputObjectSchema).optional(),
  auditLog: z.lazy(() => AuditLogUpdateManyWithoutServerNestedInputObjectSchema).optional()
}).strict();
export const ServerUpdateWithoutCategoriesInputObjectSchema: z.ZodType<Prisma.ServerUpdateWithoutCategoriesInput> = makeSchema() as unknown as z.ZodType<Prisma.ServerUpdateWithoutCategoriesInput>;
export const ServerUpdateWithoutCategoriesInputObjectZodSchema = makeSchema();
