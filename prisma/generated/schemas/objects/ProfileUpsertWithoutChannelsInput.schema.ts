import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ProfileUpdateWithoutChannelsInputObjectSchema as ProfileUpdateWithoutChannelsInputObjectSchema } from './ProfileUpdateWithoutChannelsInput.schema';
import { ProfileUncheckedUpdateWithoutChannelsInputObjectSchema as ProfileUncheckedUpdateWithoutChannelsInputObjectSchema } from './ProfileUncheckedUpdateWithoutChannelsInput.schema';
import { ProfileCreateWithoutChannelsInputObjectSchema as ProfileCreateWithoutChannelsInputObjectSchema } from './ProfileCreateWithoutChannelsInput.schema';
import { ProfileUncheckedCreateWithoutChannelsInputObjectSchema as ProfileUncheckedCreateWithoutChannelsInputObjectSchema } from './ProfileUncheckedCreateWithoutChannelsInput.schema';
import { ProfileWhereInputObjectSchema as ProfileWhereInputObjectSchema } from './ProfileWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => ProfileUpdateWithoutChannelsInputObjectSchema), z.lazy(() => ProfileUncheckedUpdateWithoutChannelsInputObjectSchema)]),
  create: z.union([z.lazy(() => ProfileCreateWithoutChannelsInputObjectSchema), z.lazy(() => ProfileUncheckedCreateWithoutChannelsInputObjectSchema)]),
  where: z.lazy(() => ProfileWhereInputObjectSchema).optional()
}).strict();
export const ProfileUpsertWithoutChannelsInputObjectSchema: z.ZodType<Prisma.ProfileUpsertWithoutChannelsInput> = makeSchema() as unknown as z.ZodType<Prisma.ProfileUpsertWithoutChannelsInput>;
export const ProfileUpsertWithoutChannelsInputObjectZodSchema = makeSchema();
