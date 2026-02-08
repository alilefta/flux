import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ProfileWhereUniqueInputObjectSchema as ProfileWhereUniqueInputObjectSchema } from './ProfileWhereUniqueInput.schema';
import { ProfileCreateWithoutServersInputObjectSchema as ProfileCreateWithoutServersInputObjectSchema } from './ProfileCreateWithoutServersInput.schema';
import { ProfileUncheckedCreateWithoutServersInputObjectSchema as ProfileUncheckedCreateWithoutServersInputObjectSchema } from './ProfileUncheckedCreateWithoutServersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProfileWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ProfileCreateWithoutServersInputObjectSchema), z.lazy(() => ProfileUncheckedCreateWithoutServersInputObjectSchema)])
}).strict();
export const ProfileCreateOrConnectWithoutServersInputObjectSchema: z.ZodType<Prisma.ProfileCreateOrConnectWithoutServersInput> = makeSchema() as unknown as z.ZodType<Prisma.ProfileCreateOrConnectWithoutServersInput>;
export const ProfileCreateOrConnectWithoutServersInputObjectZodSchema = makeSchema();
