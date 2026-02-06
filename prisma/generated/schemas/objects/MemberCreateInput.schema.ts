import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MemberRoleSchema } from '../enums/MemberRole.schema';
import { ProfileCreateNestedOneWithoutMembersInputObjectSchema as ProfileCreateNestedOneWithoutMembersInputObjectSchema } from './ProfileCreateNestedOneWithoutMembersInput.schema';
import { ServerCreateNestedOneWithoutMembersInputObjectSchema as ServerCreateNestedOneWithoutMembersInputObjectSchema } from './ServerCreateNestedOneWithoutMembersInput.schema';
import { MessageCreateNestedManyWithoutMemberInputObjectSchema as MessageCreateNestedManyWithoutMemberInputObjectSchema } from './MessageCreateNestedManyWithoutMemberInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  role: MemberRoleSchema.optional(),
  createdAt: z.coerce.date().optional(),
  profile: z.lazy(() => ProfileCreateNestedOneWithoutMembersInputObjectSchema),
  server: z.lazy(() => ServerCreateNestedOneWithoutMembersInputObjectSchema),
  messages: z.lazy(() => MessageCreateNestedManyWithoutMemberInputObjectSchema).optional()
}).strict();
export const MemberCreateInputObjectSchema: z.ZodType<Prisma.MemberCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.MemberCreateInput>;
export const MemberCreateInputObjectZodSchema = makeSchema();
