import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ProfileCreateWithoutReactionsInputObjectSchema as ProfileCreateWithoutReactionsInputObjectSchema } from './ProfileCreateWithoutReactionsInput.schema';
import { ProfileUncheckedCreateWithoutReactionsInputObjectSchema as ProfileUncheckedCreateWithoutReactionsInputObjectSchema } from './ProfileUncheckedCreateWithoutReactionsInput.schema';
import { ProfileCreateOrConnectWithoutReactionsInputObjectSchema as ProfileCreateOrConnectWithoutReactionsInputObjectSchema } from './ProfileCreateOrConnectWithoutReactionsInput.schema';
import { ProfileWhereUniqueInputObjectSchema as ProfileWhereUniqueInputObjectSchema } from './ProfileWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ProfileCreateWithoutReactionsInputObjectSchema), z.lazy(() => ProfileUncheckedCreateWithoutReactionsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ProfileCreateOrConnectWithoutReactionsInputObjectSchema).optional(),
  connect: z.lazy(() => ProfileWhereUniqueInputObjectSchema).optional()
}).strict();
export const ProfileCreateNestedOneWithoutReactionsInputObjectSchema: z.ZodType<Prisma.ProfileCreateNestedOneWithoutReactionsInput> = makeSchema() as unknown as z.ZodType<Prisma.ProfileCreateNestedOneWithoutReactionsInput>;
export const ProfileCreateNestedOneWithoutReactionsInputObjectZodSchema = makeSchema();
