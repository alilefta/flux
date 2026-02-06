import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ProfileUpdateWithoutServersInputObjectSchema as ProfileUpdateWithoutServersInputObjectSchema } from './ProfileUpdateWithoutServersInput.schema';
import { ProfileUncheckedUpdateWithoutServersInputObjectSchema as ProfileUncheckedUpdateWithoutServersInputObjectSchema } from './ProfileUncheckedUpdateWithoutServersInput.schema';
import { ProfileCreateWithoutServersInputObjectSchema as ProfileCreateWithoutServersInputObjectSchema } from './ProfileCreateWithoutServersInput.schema';
import { ProfileUncheckedCreateWithoutServersInputObjectSchema as ProfileUncheckedCreateWithoutServersInputObjectSchema } from './ProfileUncheckedCreateWithoutServersInput.schema';
import { ProfileWhereInputObjectSchema as ProfileWhereInputObjectSchema } from './ProfileWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => ProfileUpdateWithoutServersInputObjectSchema), z.lazy(() => ProfileUncheckedUpdateWithoutServersInputObjectSchema)]),
  create: z.union([z.lazy(() => ProfileCreateWithoutServersInputObjectSchema), z.lazy(() => ProfileUncheckedCreateWithoutServersInputObjectSchema)]),
  where: z.lazy(() => ProfileWhereInputObjectSchema).optional()
}).strict();
export const ProfileUpsertWithoutServersInputObjectSchema: z.ZodType<Prisma.ProfileUpsertWithoutServersInput> = makeSchema() as unknown as z.ZodType<Prisma.ProfileUpsertWithoutServersInput>;
export const ProfileUpsertWithoutServersInputObjectZodSchema = makeSchema();
