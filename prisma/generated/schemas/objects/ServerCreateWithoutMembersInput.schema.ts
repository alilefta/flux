import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ProfileCreateNestedOneWithoutServersInputObjectSchema as ProfileCreateNestedOneWithoutServersInputObjectSchema } from './ProfileCreateNestedOneWithoutServersInput.schema';
import { ChannelCreateNestedManyWithoutServerInputObjectSchema as ChannelCreateNestedManyWithoutServerInputObjectSchema } from './ChannelCreateNestedManyWithoutServerInput.schema';
import { ChannelCategoryCreateNestedManyWithoutServerInputObjectSchema as ChannelCategoryCreateNestedManyWithoutServerInputObjectSchema } from './ChannelCategoryCreateNestedManyWithoutServerInput.schema';
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
  channels: z.lazy(() => ChannelCreateNestedManyWithoutServerInputObjectSchema).optional(),
  categories: z.lazy(() => ChannelCategoryCreateNestedManyWithoutServerInputObjectSchema).optional(),
  auditLog: z.lazy(() => AuditLogCreateNestedManyWithoutServerInputObjectSchema).optional()
}).strict();
export const ServerCreateWithoutMembersInputObjectSchema: z.ZodType<Prisma.ServerCreateWithoutMembersInput> = makeSchema() as unknown as z.ZodType<Prisma.ServerCreateWithoutMembersInput>;
export const ServerCreateWithoutMembersInputObjectZodSchema = makeSchema();
