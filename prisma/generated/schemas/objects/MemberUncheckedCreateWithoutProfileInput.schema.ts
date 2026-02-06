import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MemberRoleSchema } from '../enums/MemberRole.schema';
import { MessageUncheckedCreateNestedManyWithoutMemberInputObjectSchema as MessageUncheckedCreateNestedManyWithoutMemberInputObjectSchema } from './MessageUncheckedCreateNestedManyWithoutMemberInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  role: MemberRoleSchema.optional(),
  serverId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  messages: z.lazy(() => MessageUncheckedCreateNestedManyWithoutMemberInputObjectSchema).optional()
}).strict();
export const MemberUncheckedCreateWithoutProfileInputObjectSchema: z.ZodType<Prisma.MemberUncheckedCreateWithoutProfileInput> = makeSchema() as unknown as z.ZodType<Prisma.MemberUncheckedCreateWithoutProfileInput>;
export const MemberUncheckedCreateWithoutProfileInputObjectZodSchema = makeSchema();
