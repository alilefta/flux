import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { MemberRoleSchema } from '../enums/MemberRole.schema';
import { EnumMemberRoleFieldUpdateOperationsInputObjectSchema as EnumMemberRoleFieldUpdateOperationsInputObjectSchema } from './EnumMemberRoleFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { ProfileUpdateOneRequiredWithoutMembersNestedInputObjectSchema as ProfileUpdateOneRequiredWithoutMembersNestedInputObjectSchema } from './ProfileUpdateOneRequiredWithoutMembersNestedInput.schema';
import { MessageUpdateManyWithoutMemberNestedInputObjectSchema as MessageUpdateManyWithoutMemberNestedInputObjectSchema } from './MessageUpdateManyWithoutMemberNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  role: z.union([MemberRoleSchema, z.lazy(() => EnumMemberRoleFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  profile: z.lazy(() => ProfileUpdateOneRequiredWithoutMembersNestedInputObjectSchema).optional(),
  messages: z.lazy(() => MessageUpdateManyWithoutMemberNestedInputObjectSchema).optional()
}).strict();
export const MemberUpdateWithoutServerInputObjectSchema: z.ZodType<Prisma.MemberUpdateWithoutServerInput> = makeSchema() as unknown as z.ZodType<Prisma.MemberUpdateWithoutServerInput>;
export const MemberUpdateWithoutServerInputObjectZodSchema = makeSchema();
