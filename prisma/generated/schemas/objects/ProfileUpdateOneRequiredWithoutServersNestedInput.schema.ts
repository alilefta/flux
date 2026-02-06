import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ProfileCreateWithoutServersInputObjectSchema as ProfileCreateWithoutServersInputObjectSchema } from './ProfileCreateWithoutServersInput.schema';
import { ProfileUncheckedCreateWithoutServersInputObjectSchema as ProfileUncheckedCreateWithoutServersInputObjectSchema } from './ProfileUncheckedCreateWithoutServersInput.schema';
import { ProfileCreateOrConnectWithoutServersInputObjectSchema as ProfileCreateOrConnectWithoutServersInputObjectSchema } from './ProfileCreateOrConnectWithoutServersInput.schema';
import { ProfileUpsertWithoutServersInputObjectSchema as ProfileUpsertWithoutServersInputObjectSchema } from './ProfileUpsertWithoutServersInput.schema';
import { ProfileWhereUniqueInputObjectSchema as ProfileWhereUniqueInputObjectSchema } from './ProfileWhereUniqueInput.schema';
import { ProfileUpdateToOneWithWhereWithoutServersInputObjectSchema as ProfileUpdateToOneWithWhereWithoutServersInputObjectSchema } from './ProfileUpdateToOneWithWhereWithoutServersInput.schema';
import { ProfileUpdateWithoutServersInputObjectSchema as ProfileUpdateWithoutServersInputObjectSchema } from './ProfileUpdateWithoutServersInput.schema';
import { ProfileUncheckedUpdateWithoutServersInputObjectSchema as ProfileUncheckedUpdateWithoutServersInputObjectSchema } from './ProfileUncheckedUpdateWithoutServersInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ProfileCreateWithoutServersInputObjectSchema), z.lazy(() => ProfileUncheckedCreateWithoutServersInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ProfileCreateOrConnectWithoutServersInputObjectSchema).optional(),
  upsert: z.lazy(() => ProfileUpsertWithoutServersInputObjectSchema).optional(),
  connect: z.lazy(() => ProfileWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ProfileUpdateToOneWithWhereWithoutServersInputObjectSchema), z.lazy(() => ProfileUpdateWithoutServersInputObjectSchema), z.lazy(() => ProfileUncheckedUpdateWithoutServersInputObjectSchema)]).optional()
}).strict();
export const ProfileUpdateOneRequiredWithoutServersNestedInputObjectSchema: z.ZodType<Prisma.ProfileUpdateOneRequiredWithoutServersNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ProfileUpdateOneRequiredWithoutServersNestedInput>;
export const ProfileUpdateOneRequiredWithoutServersNestedInputObjectZodSchema = makeSchema();
