import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ProfileCreateWithoutMembersInputObjectSchema as ProfileCreateWithoutMembersInputObjectSchema } from './ProfileCreateWithoutMembersInput.schema';
import { ProfileUncheckedCreateWithoutMembersInputObjectSchema as ProfileUncheckedCreateWithoutMembersInputObjectSchema } from './ProfileUncheckedCreateWithoutMembersInput.schema';
import { ProfileCreateOrConnectWithoutMembersInputObjectSchema as ProfileCreateOrConnectWithoutMembersInputObjectSchema } from './ProfileCreateOrConnectWithoutMembersInput.schema';
import { ProfileUpsertWithoutMembersInputObjectSchema as ProfileUpsertWithoutMembersInputObjectSchema } from './ProfileUpsertWithoutMembersInput.schema';
import { ProfileWhereUniqueInputObjectSchema as ProfileWhereUniqueInputObjectSchema } from './ProfileWhereUniqueInput.schema';
import { ProfileUpdateToOneWithWhereWithoutMembersInputObjectSchema as ProfileUpdateToOneWithWhereWithoutMembersInputObjectSchema } from './ProfileUpdateToOneWithWhereWithoutMembersInput.schema';
import { ProfileUpdateWithoutMembersInputObjectSchema as ProfileUpdateWithoutMembersInputObjectSchema } from './ProfileUpdateWithoutMembersInput.schema';
import { ProfileUncheckedUpdateWithoutMembersInputObjectSchema as ProfileUncheckedUpdateWithoutMembersInputObjectSchema } from './ProfileUncheckedUpdateWithoutMembersInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ProfileCreateWithoutMembersInputObjectSchema), z.lazy(() => ProfileUncheckedCreateWithoutMembersInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ProfileCreateOrConnectWithoutMembersInputObjectSchema).optional(),
  upsert: z.lazy(() => ProfileUpsertWithoutMembersInputObjectSchema).optional(),
  connect: z.lazy(() => ProfileWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ProfileUpdateToOneWithWhereWithoutMembersInputObjectSchema), z.lazy(() => ProfileUpdateWithoutMembersInputObjectSchema), z.lazy(() => ProfileUncheckedUpdateWithoutMembersInputObjectSchema)]).optional()
}).strict();
export const ProfileUpdateOneRequiredWithoutMembersNestedInputObjectSchema: z.ZodType<Prisma.ProfileUpdateOneRequiredWithoutMembersNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ProfileUpdateOneRequiredWithoutMembersNestedInput>;
export const ProfileUpdateOneRequiredWithoutMembersNestedInputObjectZodSchema = makeSchema();
