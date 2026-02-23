import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ProfileWhereUniqueInputObjectSchema as ProfileWhereUniqueInputObjectSchema } from './ProfileWhereUniqueInput.schema';
import { ProfileCreateWithoutReactionsInputObjectSchema as ProfileCreateWithoutReactionsInputObjectSchema } from './ProfileCreateWithoutReactionsInput.schema';
import { ProfileUncheckedCreateWithoutReactionsInputObjectSchema as ProfileUncheckedCreateWithoutReactionsInputObjectSchema } from './ProfileUncheckedCreateWithoutReactionsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProfileWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ProfileCreateWithoutReactionsInputObjectSchema), z.lazy(() => ProfileUncheckedCreateWithoutReactionsInputObjectSchema)])
}).strict();
export const ProfileCreateOrConnectWithoutReactionsInputObjectSchema: z.ZodType<Prisma.ProfileCreateOrConnectWithoutReactionsInput> = makeSchema() as unknown as z.ZodType<Prisma.ProfileCreateOrConnectWithoutReactionsInput>;
export const ProfileCreateOrConnectWithoutReactionsInputObjectZodSchema = makeSchema();
