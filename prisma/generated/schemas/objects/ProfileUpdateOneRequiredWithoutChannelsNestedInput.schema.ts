import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ProfileCreateWithoutChannelsInputObjectSchema as ProfileCreateWithoutChannelsInputObjectSchema } from './ProfileCreateWithoutChannelsInput.schema';
import { ProfileUncheckedCreateWithoutChannelsInputObjectSchema as ProfileUncheckedCreateWithoutChannelsInputObjectSchema } from './ProfileUncheckedCreateWithoutChannelsInput.schema';
import { ProfileCreateOrConnectWithoutChannelsInputObjectSchema as ProfileCreateOrConnectWithoutChannelsInputObjectSchema } from './ProfileCreateOrConnectWithoutChannelsInput.schema';
import { ProfileUpsertWithoutChannelsInputObjectSchema as ProfileUpsertWithoutChannelsInputObjectSchema } from './ProfileUpsertWithoutChannelsInput.schema';
import { ProfileWhereUniqueInputObjectSchema as ProfileWhereUniqueInputObjectSchema } from './ProfileWhereUniqueInput.schema';
import { ProfileUpdateToOneWithWhereWithoutChannelsInputObjectSchema as ProfileUpdateToOneWithWhereWithoutChannelsInputObjectSchema } from './ProfileUpdateToOneWithWhereWithoutChannelsInput.schema';
import { ProfileUpdateWithoutChannelsInputObjectSchema as ProfileUpdateWithoutChannelsInputObjectSchema } from './ProfileUpdateWithoutChannelsInput.schema';
import { ProfileUncheckedUpdateWithoutChannelsInputObjectSchema as ProfileUncheckedUpdateWithoutChannelsInputObjectSchema } from './ProfileUncheckedUpdateWithoutChannelsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ProfileCreateWithoutChannelsInputObjectSchema), z.lazy(() => ProfileUncheckedCreateWithoutChannelsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ProfileCreateOrConnectWithoutChannelsInputObjectSchema).optional(),
  upsert: z.lazy(() => ProfileUpsertWithoutChannelsInputObjectSchema).optional(),
  connect: z.lazy(() => ProfileWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ProfileUpdateToOneWithWhereWithoutChannelsInputObjectSchema), z.lazy(() => ProfileUpdateWithoutChannelsInputObjectSchema), z.lazy(() => ProfileUncheckedUpdateWithoutChannelsInputObjectSchema)]).optional()
}).strict();
export const ProfileUpdateOneRequiredWithoutChannelsNestedInputObjectSchema: z.ZodType<Prisma.ProfileUpdateOneRequiredWithoutChannelsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ProfileUpdateOneRequiredWithoutChannelsNestedInput>;
export const ProfileUpdateOneRequiredWithoutChannelsNestedInputObjectZodSchema = makeSchema();
