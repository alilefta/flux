import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ProfileCreateNestedOneWithoutServersInputObjectSchema as ProfileCreateNestedOneWithoutServersInputObjectSchema } from './ProfileCreateNestedOneWithoutServersInput.schema';
import { MemberCreateNestedManyWithoutServerInputObjectSchema as MemberCreateNestedManyWithoutServerInputObjectSchema } from './MemberCreateNestedManyWithoutServerInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  imageUrl: z.string(),
  inviteCode: z.string(),
  memberCount: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  profile: z.lazy(() => ProfileCreateNestedOneWithoutServersInputObjectSchema),
  members: z.lazy(() => MemberCreateNestedManyWithoutServerInputObjectSchema).optional()
}).strict();
export const ServerCreateWithoutChannelsInputObjectSchema: z.ZodType<Prisma.ServerCreateWithoutChannelsInput> = makeSchema() as unknown as z.ZodType<Prisma.ServerCreateWithoutChannelsInput>;
export const ServerCreateWithoutChannelsInputObjectZodSchema = makeSchema();
