import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ProfileCreateNestedOneWithoutServersInputObjectSchema as ProfileCreateNestedOneWithoutServersInputObjectSchema } from './ProfileCreateNestedOneWithoutServersInput.schema';
import { ChannelCreateNestedManyWithoutServerInputObjectSchema as ChannelCreateNestedManyWithoutServerInputObjectSchema } from './ChannelCreateNestedManyWithoutServerInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  imageUrl: z.string(),
  inviteCode: z.string(),
  memberCount: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  profile: z.lazy(() => ProfileCreateNestedOneWithoutServersInputObjectSchema),
  channels: z.lazy(() => ChannelCreateNestedManyWithoutServerInputObjectSchema).optional()
}).strict();
export const ServerCreateWithoutMembersInputObjectSchema: z.ZodType<Prisma.ServerCreateWithoutMembersInput> = makeSchema() as unknown as z.ZodType<Prisma.ServerCreateWithoutMembersInput>;
export const ServerCreateWithoutMembersInputObjectZodSchema = makeSchema();
