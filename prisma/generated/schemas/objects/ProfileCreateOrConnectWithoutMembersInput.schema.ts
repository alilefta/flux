import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ProfileWhereUniqueInputObjectSchema as ProfileWhereUniqueInputObjectSchema } from './ProfileWhereUniqueInput.schema';
import { ProfileCreateWithoutMembersInputObjectSchema as ProfileCreateWithoutMembersInputObjectSchema } from './ProfileCreateWithoutMembersInput.schema';
import { ProfileUncheckedCreateWithoutMembersInputObjectSchema as ProfileUncheckedCreateWithoutMembersInputObjectSchema } from './ProfileUncheckedCreateWithoutMembersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProfileWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ProfileCreateWithoutMembersInputObjectSchema), z.lazy(() => ProfileUncheckedCreateWithoutMembersInputObjectSchema)])
}).strict();
export const ProfileCreateOrConnectWithoutMembersInputObjectSchema: z.ZodType<Prisma.ProfileCreateOrConnectWithoutMembersInput> = makeSchema() as unknown as z.ZodType<Prisma.ProfileCreateOrConnectWithoutMembersInput>;
export const ProfileCreateOrConnectWithoutMembersInputObjectZodSchema = makeSchema();
