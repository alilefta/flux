import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MemberUncheckedCreateNestedManyWithoutServerInputObjectSchema as MemberUncheckedCreateNestedManyWithoutServerInputObjectSchema } from './MemberUncheckedCreateNestedManyWithoutServerInput.schema';
import { ChannelUncheckedCreateNestedManyWithoutServerInputObjectSchema as ChannelUncheckedCreateNestedManyWithoutServerInputObjectSchema } from './ChannelUncheckedCreateNestedManyWithoutServerInput.schema';
import { AuditLogUncheckedCreateNestedManyWithoutServerInputObjectSchema as AuditLogUncheckedCreateNestedManyWithoutServerInputObjectSchema } from './AuditLogUncheckedCreateNestedManyWithoutServerInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  imageUrl: z.string(),
  inviteCode: z.string(),
  description: z.string().optional().nullable(),
  memberCount: z.number().int().optional(),
  profileId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  members: z.lazy(() => MemberUncheckedCreateNestedManyWithoutServerInputObjectSchema).optional(),
  channels: z.lazy(() => ChannelUncheckedCreateNestedManyWithoutServerInputObjectSchema).optional(),
  auditLog: z.lazy(() => AuditLogUncheckedCreateNestedManyWithoutServerInputObjectSchema).optional()
}).strict();
export const ServerUncheckedCreateWithoutCategoriesInputObjectSchema: z.ZodType<Prisma.ServerUncheckedCreateWithoutCategoriesInput> = makeSchema() as unknown as z.ZodType<Prisma.ServerUncheckedCreateWithoutCategoriesInput>;
export const ServerUncheckedCreateWithoutCategoriesInputObjectZodSchema = makeSchema();
