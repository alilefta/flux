import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ProfileWhereInputObjectSchema as ProfileWhereInputObjectSchema } from './ProfileWhereInput.schema';
import { ProfileUpdateWithoutReactionsInputObjectSchema as ProfileUpdateWithoutReactionsInputObjectSchema } from './ProfileUpdateWithoutReactionsInput.schema';
import { ProfileUncheckedUpdateWithoutReactionsInputObjectSchema as ProfileUncheckedUpdateWithoutReactionsInputObjectSchema } from './ProfileUncheckedUpdateWithoutReactionsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProfileWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ProfileUpdateWithoutReactionsInputObjectSchema), z.lazy(() => ProfileUncheckedUpdateWithoutReactionsInputObjectSchema)])
}).strict();
export const ProfileUpdateToOneWithWhereWithoutReactionsInputObjectSchema: z.ZodType<Prisma.ProfileUpdateToOneWithWhereWithoutReactionsInput> = makeSchema() as unknown as z.ZodType<Prisma.ProfileUpdateToOneWithWhereWithoutReactionsInput>;
export const ProfileUpdateToOneWithWhereWithoutReactionsInputObjectZodSchema = makeSchema();
