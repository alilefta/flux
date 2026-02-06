import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ChannelUncheckedCreateNestedManyWithoutServerInputObjectSchema as ChannelUncheckedCreateNestedManyWithoutServerInputObjectSchema } from './ChannelUncheckedCreateNestedManyWithoutServerInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  imageUrl: z.string(),
  inviteCode: z.string(),
  profileId: z.string(),
  memberCount: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  channels: z.lazy(() => ChannelUncheckedCreateNestedManyWithoutServerInputObjectSchema).optional()
}).strict();
export const ServerUncheckedCreateWithoutMembersInputObjectSchema: z.ZodType<Prisma.ServerUncheckedCreateWithoutMembersInput> = makeSchema() as unknown as z.ZodType<Prisma.ServerUncheckedCreateWithoutMembersInput>;
export const ServerUncheckedCreateWithoutMembersInputObjectZodSchema = makeSchema();
