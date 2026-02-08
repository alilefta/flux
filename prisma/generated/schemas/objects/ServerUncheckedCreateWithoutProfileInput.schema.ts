import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MemberUncheckedCreateNestedManyWithoutServerInputObjectSchema as MemberUncheckedCreateNestedManyWithoutServerInputObjectSchema } from './MemberUncheckedCreateNestedManyWithoutServerInput.schema';
import { ChannelUncheckedCreateNestedManyWithoutServerInputObjectSchema as ChannelUncheckedCreateNestedManyWithoutServerInputObjectSchema } from './ChannelUncheckedCreateNestedManyWithoutServerInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  imageUrl: z.string(),
  inviteCode: z.string(),
  memberCount: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  members: z.lazy(() => MemberUncheckedCreateNestedManyWithoutServerInputObjectSchema).optional(),
  channels: z.lazy(() => ChannelUncheckedCreateNestedManyWithoutServerInputObjectSchema).optional()
}).strict();
export const ServerUncheckedCreateWithoutProfileInputObjectSchema: z.ZodType<Prisma.ServerUncheckedCreateWithoutProfileInput> = makeSchema() as unknown as z.ZodType<Prisma.ServerUncheckedCreateWithoutProfileInput>;
export const ServerUncheckedCreateWithoutProfileInputObjectZodSchema = makeSchema();
