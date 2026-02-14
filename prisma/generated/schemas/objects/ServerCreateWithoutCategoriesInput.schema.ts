import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ProfileCreateNestedOneWithoutServersInputObjectSchema as ProfileCreateNestedOneWithoutServersInputObjectSchema } from './ProfileCreateNestedOneWithoutServersInput.schema';
import { MemberCreateNestedManyWithoutServerInputObjectSchema as MemberCreateNestedManyWithoutServerInputObjectSchema } from './MemberCreateNestedManyWithoutServerInput.schema';
import { ChannelCreateNestedManyWithoutServerInputObjectSchema as ChannelCreateNestedManyWithoutServerInputObjectSchema } from './ChannelCreateNestedManyWithoutServerInput.schema';
import { AuditLogCreateNestedManyWithoutServerInputObjectSchema as AuditLogCreateNestedManyWithoutServerInputObjectSchema } from './AuditLogCreateNestedManyWithoutServerInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  imageUrl: z.string(),
  inviteCode: z.string(),
  description: z.string().optional().nullable(),
  memberCount: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  profile: z.lazy(() => ProfileCreateNestedOneWithoutServersInputObjectSchema),
  members: z.lazy(() => MemberCreateNestedManyWithoutServerInputObjectSchema).optional(),
  channels: z.lazy(() => ChannelCreateNestedManyWithoutServerInputObjectSchema).optional(),
  auditLog: z.lazy(() => AuditLogCreateNestedManyWithoutServerInputObjectSchema).optional()
}).strict();
export const ServerCreateWithoutCategoriesInputObjectSchema: z.ZodType<Prisma.ServerCreateWithoutCategoriesInput> = makeSchema() as unknown as z.ZodType<Prisma.ServerCreateWithoutCategoriesInput>;
export const ServerCreateWithoutCategoriesInputObjectZodSchema = makeSchema();
