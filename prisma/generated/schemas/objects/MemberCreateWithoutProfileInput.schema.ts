import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MemberRoleSchema } from '../enums/MemberRole.schema';
import { ServerCreateNestedOneWithoutMembersInputObjectSchema as ServerCreateNestedOneWithoutMembersInputObjectSchema } from './ServerCreateNestedOneWithoutMembersInput.schema';
import { MessageCreateNestedManyWithoutMemberInputObjectSchema as MessageCreateNestedManyWithoutMemberInputObjectSchema } from './MessageCreateNestedManyWithoutMemberInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  role: MemberRoleSchema.optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  server: z.lazy(() => ServerCreateNestedOneWithoutMembersInputObjectSchema),
  messages: z.lazy(() => MessageCreateNestedManyWithoutMemberInputObjectSchema).optional()
}).strict();
export const MemberCreateWithoutProfileInputObjectSchema: z.ZodType<Prisma.MemberCreateWithoutProfileInput> = makeSchema() as unknown as z.ZodType<Prisma.MemberCreateWithoutProfileInput>;
export const MemberCreateWithoutProfileInputObjectZodSchema = makeSchema();
