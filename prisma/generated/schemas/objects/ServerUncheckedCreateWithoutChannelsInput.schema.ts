import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MemberUncheckedCreateNestedManyWithoutServerInputObjectSchema as MemberUncheckedCreateNestedManyWithoutServerInputObjectSchema } from './MemberUncheckedCreateNestedManyWithoutServerInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  imageUrl: z.string(),
  inviteCode: z.string(),
  profileId: z.string(),
  memberCount: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  members: z.lazy(() => MemberUncheckedCreateNestedManyWithoutServerInputObjectSchema).optional()
}).strict();
export const ServerUncheckedCreateWithoutChannelsInputObjectSchema: z.ZodType<Prisma.ServerUncheckedCreateWithoutChannelsInput> = makeSchema() as unknown as z.ZodType<Prisma.ServerUncheckedCreateWithoutChannelsInput>;
export const ServerUncheckedCreateWithoutChannelsInputObjectZodSchema = makeSchema();
