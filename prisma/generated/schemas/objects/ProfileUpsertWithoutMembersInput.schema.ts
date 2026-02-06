import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ProfileUpdateWithoutMembersInputObjectSchema as ProfileUpdateWithoutMembersInputObjectSchema } from './ProfileUpdateWithoutMembersInput.schema';
import { ProfileUncheckedUpdateWithoutMembersInputObjectSchema as ProfileUncheckedUpdateWithoutMembersInputObjectSchema } from './ProfileUncheckedUpdateWithoutMembersInput.schema';
import { ProfileCreateWithoutMembersInputObjectSchema as ProfileCreateWithoutMembersInputObjectSchema } from './ProfileCreateWithoutMembersInput.schema';
import { ProfileUncheckedCreateWithoutMembersInputObjectSchema as ProfileUncheckedCreateWithoutMembersInputObjectSchema } from './ProfileUncheckedCreateWithoutMembersInput.schema';
import { ProfileWhereInputObjectSchema as ProfileWhereInputObjectSchema } from './ProfileWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => ProfileUpdateWithoutMembersInputObjectSchema), z.lazy(() => ProfileUncheckedUpdateWithoutMembersInputObjectSchema)]),
  create: z.union([z.lazy(() => ProfileCreateWithoutMembersInputObjectSchema), z.lazy(() => ProfileUncheckedCreateWithoutMembersInputObjectSchema)]),
  where: z.lazy(() => ProfileWhereInputObjectSchema).optional()
}).strict();
export const ProfileUpsertWithoutMembersInputObjectSchema: z.ZodType<Prisma.ProfileUpsertWithoutMembersInput> = makeSchema() as unknown as z.ZodType<Prisma.ProfileUpsertWithoutMembersInput>;
export const ProfileUpsertWithoutMembersInputObjectZodSchema = makeSchema();
