import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ProfileWhereInputObjectSchema as ProfileWhereInputObjectSchema } from './ProfileWhereInput.schema';
import { ProfileUpdateWithoutMembersInputObjectSchema as ProfileUpdateWithoutMembersInputObjectSchema } from './ProfileUpdateWithoutMembersInput.schema';
import { ProfileUncheckedUpdateWithoutMembersInputObjectSchema as ProfileUncheckedUpdateWithoutMembersInputObjectSchema } from './ProfileUncheckedUpdateWithoutMembersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProfileWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ProfileUpdateWithoutMembersInputObjectSchema), z.lazy(() => ProfileUncheckedUpdateWithoutMembersInputObjectSchema)])
}).strict();
export const ProfileUpdateToOneWithWhereWithoutMembersInputObjectSchema: z.ZodType<Prisma.ProfileUpdateToOneWithWhereWithoutMembersInput> = makeSchema() as unknown as z.ZodType<Prisma.ProfileUpdateToOneWithWhereWithoutMembersInput>;
export const ProfileUpdateToOneWithWhereWithoutMembersInputObjectZodSchema = makeSchema();
