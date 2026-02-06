import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ProfileCreateWithoutMembersInputObjectSchema as ProfileCreateWithoutMembersInputObjectSchema } from './ProfileCreateWithoutMembersInput.schema';
import { ProfileUncheckedCreateWithoutMembersInputObjectSchema as ProfileUncheckedCreateWithoutMembersInputObjectSchema } from './ProfileUncheckedCreateWithoutMembersInput.schema';
import { ProfileCreateOrConnectWithoutMembersInputObjectSchema as ProfileCreateOrConnectWithoutMembersInputObjectSchema } from './ProfileCreateOrConnectWithoutMembersInput.schema';
import { ProfileWhereUniqueInputObjectSchema as ProfileWhereUniqueInputObjectSchema } from './ProfileWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ProfileCreateWithoutMembersInputObjectSchema), z.lazy(() => ProfileUncheckedCreateWithoutMembersInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ProfileCreateOrConnectWithoutMembersInputObjectSchema).optional(),
  connect: z.lazy(() => ProfileWhereUniqueInputObjectSchema).optional()
}).strict();
export const ProfileCreateNestedOneWithoutMembersInputObjectSchema: z.ZodType<Prisma.ProfileCreateNestedOneWithoutMembersInput> = makeSchema() as unknown as z.ZodType<Prisma.ProfileCreateNestedOneWithoutMembersInput>;
export const ProfileCreateNestedOneWithoutMembersInputObjectZodSchema = makeSchema();
