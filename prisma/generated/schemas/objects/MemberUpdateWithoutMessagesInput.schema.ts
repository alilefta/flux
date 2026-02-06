import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { MemberRoleSchema } from '../enums/MemberRole.schema';
import { EnumMemberRoleFieldUpdateOperationsInputObjectSchema as EnumMemberRoleFieldUpdateOperationsInputObjectSchema } from './EnumMemberRoleFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { ProfileUpdateOneRequiredWithoutMembersNestedInputObjectSchema as ProfileUpdateOneRequiredWithoutMembersNestedInputObjectSchema } from './ProfileUpdateOneRequiredWithoutMembersNestedInput.schema';
import { ServerUpdateOneRequiredWithoutMembersNestedInputObjectSchema as ServerUpdateOneRequiredWithoutMembersNestedInputObjectSchema } from './ServerUpdateOneRequiredWithoutMembersNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  role: z.union([MemberRoleSchema, z.lazy(() => EnumMemberRoleFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  profile: z.lazy(() => ProfileUpdateOneRequiredWithoutMembersNestedInputObjectSchema).optional(),
  server: z.lazy(() => ServerUpdateOneRequiredWithoutMembersNestedInputObjectSchema).optional()
}).strict();
export const MemberUpdateWithoutMessagesInputObjectSchema: z.ZodType<Prisma.MemberUpdateWithoutMessagesInput> = makeSchema() as unknown as z.ZodType<Prisma.MemberUpdateWithoutMessagesInput>;
export const MemberUpdateWithoutMessagesInputObjectZodSchema = makeSchema();
