import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MemberUncheckedCreateNestedManyWithoutServerInputObjectSchema as MemberUncheckedCreateNestedManyWithoutServerInputObjectSchema } from './MemberUncheckedCreateNestedManyWithoutServerInput.schema';
import { ChannelUncheckedCreateNestedManyWithoutServerInputObjectSchema as ChannelUncheckedCreateNestedManyWithoutServerInputObjectSchema } from './ChannelUncheckedCreateNestedManyWithoutServerInput.schema';
import { ChannelCategoryUncheckedCreateNestedManyWithoutServerInputObjectSchema as ChannelCategoryUncheckedCreateNestedManyWithoutServerInputObjectSchema } from './ChannelCategoryUncheckedCreateNestedManyWithoutServerInput.schema';
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
  members: z.lazy(() => MemberUncheckedCreateNestedManyWithoutServerInputObjectSchema).optional(),
  channels: z.lazy(() => ChannelUncheckedCreateNestedManyWithoutServerInputObjectSchema).optional(),
  categories: z.lazy(() => ChannelCategoryUncheckedCreateNestedManyWithoutServerInputObjectSchema).optional(),
  auditLog: z.lazy(() => AuditLogUncheckedCreateNestedManyWithoutServerInputObjectSchema).optional()
}).strict();
export const ServerUncheckedCreateInputObjectSchema: z.ZodType<Prisma.ServerUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ServerUncheckedCreateInput>;
export const ServerUncheckedCreateInputObjectZodSchema = makeSchema();
