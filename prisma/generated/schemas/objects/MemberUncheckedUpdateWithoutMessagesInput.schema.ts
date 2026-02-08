import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { MemberRoleSchema } from '../enums/MemberRole.schema';
import { EnumMemberRoleFieldUpdateOperationsInputObjectSchema as EnumMemberRoleFieldUpdateOperationsInputObjectSchema } from './EnumMemberRoleFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  role: z.union([MemberRoleSchema, z.lazy(() => EnumMemberRoleFieldUpdateOperationsInputObjectSchema)]).optional(),
  profileId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  serverId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const MemberUncheckedUpdateWithoutMessagesInputObjectSchema: z.ZodType<Prisma.MemberUncheckedUpdateWithoutMessagesInput> = makeSchema() as unknown as z.ZodType<Prisma.MemberUncheckedUpdateWithoutMessagesInput>;
export const MemberUncheckedUpdateWithoutMessagesInputObjectZodSchema = makeSchema();
