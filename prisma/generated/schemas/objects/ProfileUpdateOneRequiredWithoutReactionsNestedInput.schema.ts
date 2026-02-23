import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ProfileCreateWithoutReactionsInputObjectSchema as ProfileCreateWithoutReactionsInputObjectSchema } from './ProfileCreateWithoutReactionsInput.schema';
import { ProfileUncheckedCreateWithoutReactionsInputObjectSchema as ProfileUncheckedCreateWithoutReactionsInputObjectSchema } from './ProfileUncheckedCreateWithoutReactionsInput.schema';
import { ProfileCreateOrConnectWithoutReactionsInputObjectSchema as ProfileCreateOrConnectWithoutReactionsInputObjectSchema } from './ProfileCreateOrConnectWithoutReactionsInput.schema';
import { ProfileUpsertWithoutReactionsInputObjectSchema as ProfileUpsertWithoutReactionsInputObjectSchema } from './ProfileUpsertWithoutReactionsInput.schema';
import { ProfileWhereUniqueInputObjectSchema as ProfileWhereUniqueInputObjectSchema } from './ProfileWhereUniqueInput.schema';
import { ProfileUpdateToOneWithWhereWithoutReactionsInputObjectSchema as ProfileUpdateToOneWithWhereWithoutReactionsInputObjectSchema } from './ProfileUpdateToOneWithWhereWithoutReactionsInput.schema';
import { ProfileUpdateWithoutReactionsInputObjectSchema as ProfileUpdateWithoutReactionsInputObjectSchema } from './ProfileUpdateWithoutReactionsInput.schema';
import { ProfileUncheckedUpdateWithoutReactionsInputObjectSchema as ProfileUncheckedUpdateWithoutReactionsInputObjectSchema } from './ProfileUncheckedUpdateWithoutReactionsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ProfileCreateWithoutReactionsInputObjectSchema), z.lazy(() => ProfileUncheckedCreateWithoutReactionsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ProfileCreateOrConnectWithoutReactionsInputObjectSchema).optional(),
  upsert: z.lazy(() => ProfileUpsertWithoutReactionsInputObjectSchema).optional(),
  connect: z.lazy(() => ProfileWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ProfileUpdateToOneWithWhereWithoutReactionsInputObjectSchema), z.lazy(() => ProfileUpdateWithoutReactionsInputObjectSchema), z.lazy(() => ProfileUncheckedUpdateWithoutReactionsInputObjectSchema)]).optional()
}).strict();
export const ProfileUpdateOneRequiredWithoutReactionsNestedInputObjectSchema: z.ZodType<Prisma.ProfileUpdateOneRequiredWithoutReactionsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ProfileUpdateOneRequiredWithoutReactionsNestedInput>;
export const ProfileUpdateOneRequiredWithoutReactionsNestedInputObjectZodSchema = makeSchema();
