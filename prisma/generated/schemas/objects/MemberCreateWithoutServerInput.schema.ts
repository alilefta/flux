import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MemberRoleSchema } from '../enums/MemberRole.schema';
import { ProfileCreateNestedOneWithoutMembersInputObjectSchema as ProfileCreateNestedOneWithoutMembersInputObjectSchema } from './ProfileCreateNestedOneWithoutMembersInput.schema';
import { MessageCreateNestedManyWithoutMemberInputObjectSchema as MessageCreateNestedManyWithoutMemberInputObjectSchema } from './MessageCreateNestedManyWithoutMemberInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  role: MemberRoleSchema.optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  profile: z.lazy(() => ProfileCreateNestedOneWithoutMembersInputObjectSchema),
  messages: z.lazy(() => MessageCreateNestedManyWithoutMemberInputObjectSchema).optional()
}).strict();
export const MemberCreateWithoutServerInputObjectSchema: z.ZodType<Prisma.MemberCreateWithoutServerInput> = makeSchema() as unknown as z.ZodType<Prisma.MemberCreateWithoutServerInput>;
export const MemberCreateWithoutServerInputObjectZodSchema = makeSchema();
