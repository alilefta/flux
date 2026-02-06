import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MemberRoleSchema } from '../enums/MemberRole.schema'

const makeSchema = () => z.object({
  set: MemberRoleSchema.optional()
}).strict();
export const EnumMemberRoleFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumMemberRoleFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.EnumMemberRoleFieldUpdateOperationsInput>;
export const EnumMemberRoleFieldUpdateOperationsInputObjectZodSchema = makeSchema();
