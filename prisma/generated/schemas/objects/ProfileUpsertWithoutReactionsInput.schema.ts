import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ProfileUpdateWithoutReactionsInputObjectSchema as ProfileUpdateWithoutReactionsInputObjectSchema } from './ProfileUpdateWithoutReactionsInput.schema';
import { ProfileUncheckedUpdateWithoutReactionsInputObjectSchema as ProfileUncheckedUpdateWithoutReactionsInputObjectSchema } from './ProfileUncheckedUpdateWithoutReactionsInput.schema';
import { ProfileCreateWithoutReactionsInputObjectSchema as ProfileCreateWithoutReactionsInputObjectSchema } from './ProfileCreateWithoutReactionsInput.schema';
import { ProfileUncheckedCreateWithoutReactionsInputObjectSchema as ProfileUncheckedCreateWithoutReactionsInputObjectSchema } from './ProfileUncheckedCreateWithoutReactionsInput.schema';
import { ProfileWhereInputObjectSchema as ProfileWhereInputObjectSchema } from './ProfileWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => ProfileUpdateWithoutReactionsInputObjectSchema), z.lazy(() => ProfileUncheckedUpdateWithoutReactionsInputObjectSchema)]),
  create: z.union([z.lazy(() => ProfileCreateWithoutReactionsInputObjectSchema), z.lazy(() => ProfileUncheckedCreateWithoutReactionsInputObjectSchema)]),
  where: z.lazy(() => ProfileWhereInputObjectSchema).optional()
}).strict();
export const ProfileUpsertWithoutReactionsInputObjectSchema: z.ZodType<Prisma.ProfileUpsertWithoutReactionsInput> = makeSchema() as unknown as z.ZodType<Prisma.ProfileUpsertWithoutReactionsInput>;
export const ProfileUpsertWithoutReactionsInputObjectZodSchema = makeSchema();
