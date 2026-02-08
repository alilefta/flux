import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MemberRoleSchema } from '../enums/MemberRole.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  role: MemberRoleSchema.optional(),
  profileId: z.string(),
  serverId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const MemberUncheckedCreateWithoutMessagesInputObjectSchema: z.ZodType<Prisma.MemberUncheckedCreateWithoutMessagesInput> = makeSchema() as unknown as z.ZodType<Prisma.MemberUncheckedCreateWithoutMessagesInput>;
export const MemberUncheckedCreateWithoutMessagesInputObjectZodSchema = makeSchema();
