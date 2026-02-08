import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ProfileCreateWithoutServersInputObjectSchema as ProfileCreateWithoutServersInputObjectSchema } from './ProfileCreateWithoutServersInput.schema';
import { ProfileUncheckedCreateWithoutServersInputObjectSchema as ProfileUncheckedCreateWithoutServersInputObjectSchema } from './ProfileUncheckedCreateWithoutServersInput.schema';
import { ProfileCreateOrConnectWithoutServersInputObjectSchema as ProfileCreateOrConnectWithoutServersInputObjectSchema } from './ProfileCreateOrConnectWithoutServersInput.schema';
import { ProfileWhereUniqueInputObjectSchema as ProfileWhereUniqueInputObjectSchema } from './ProfileWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ProfileCreateWithoutServersInputObjectSchema), z.lazy(() => ProfileUncheckedCreateWithoutServersInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ProfileCreateOrConnectWithoutServersInputObjectSchema).optional(),
  connect: z.lazy(() => ProfileWhereUniqueInputObjectSchema).optional()
}).strict();
export const ProfileCreateNestedOneWithoutServersInputObjectSchema: z.ZodType<Prisma.ProfileCreateNestedOneWithoutServersInput> = makeSchema() as unknown as z.ZodType<Prisma.ProfileCreateNestedOneWithoutServersInput>;
export const ProfileCreateNestedOneWithoutServersInputObjectZodSchema = makeSchema();
