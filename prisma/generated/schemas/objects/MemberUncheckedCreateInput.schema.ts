import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MemberRoleSchema } from '../enums/MemberRole.schema';
import { MessageUncheckedCreateNestedManyWithoutMemberInputObjectSchema as MessageUncheckedCreateNestedManyWithoutMemberInputObjectSchema } from './MessageUncheckedCreateNestedManyWithoutMemberInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  role: MemberRoleSchema.optional(),
  profileId: z.string(),
  serverId: z.string(),
  createdAt: z.coerce.date().optional(),
  messages: z.lazy(() => MessageUncheckedCreateNestedManyWithoutMemberInputObjectSchema).optional()
}).strict();
export const MemberUncheckedCreateInputObjectSchema: z.ZodType<Prisma.MemberUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.MemberUncheckedCreateInput>;
export const MemberUncheckedCreateInputObjectZodSchema = makeSchema();
