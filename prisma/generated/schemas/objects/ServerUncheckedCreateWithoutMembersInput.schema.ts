import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
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
  updatedAt: z.coerce.date().optional(),
  channels: z.lazy(() => ChannelUncheckedCreateNestedManyWithoutServerInputObjectSchema).optional(),
  categories: z.lazy(() => ChannelCategoryUncheckedCreateNestedManyWithoutServerInputObjectSchema).optional(),
  auditLog: z.lazy(() => AuditLogUncheckedCreateNestedManyWithoutServerInputObjectSchema).optional()
}).strict();
export const ServerUncheckedCreateWithoutMembersInputObjectSchema: z.ZodType<Prisma.ServerUncheckedCreateWithoutMembersInput> = makeSchema() as unknown as z.ZodType<Prisma.ServerUncheckedCreateWithoutMembersInput>;
export const ServerUncheckedCreateWithoutMembersInputObjectZodSchema = makeSchema();
