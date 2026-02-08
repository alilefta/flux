import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MemberRoleSchema } from '../enums/MemberRole.schema';
import { ProfileCreateNestedOneWithoutMembersInputObjectSchema as ProfileCreateNestedOneWithoutMembersInputObjectSchema } from './ProfileCreateNestedOneWithoutMembersInput.schema';
import { ServerCreateNestedOneWithoutMembersInputObjectSchema as ServerCreateNestedOneWithoutMembersInputObjectSchema } from './ServerCreateNestedOneWithoutMembersInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  role: MemberRoleSchema.optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  profile: z.lazy(() => ProfileCreateNestedOneWithoutMembersInputObjectSchema),
  server: z.lazy(() => ServerCreateNestedOneWithoutMembersInputObjectSchema)
}).strict();
export const MemberCreateWithoutMessagesInputObjectSchema: z.ZodType<Prisma.MemberCreateWithoutMessagesInput> = makeSchema() as unknown as z.ZodType<Prisma.MemberCreateWithoutMessagesInput>;
export const MemberCreateWithoutMessagesInputObjectZodSchema = makeSchema();
