import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ProfileWhereInputObjectSchema as ProfileWhereInputObjectSchema } from './ProfileWhereInput.schema';
import { ProfileUpdateWithoutChannelsInputObjectSchema as ProfileUpdateWithoutChannelsInputObjectSchema } from './ProfileUpdateWithoutChannelsInput.schema';
import { ProfileUncheckedUpdateWithoutChannelsInputObjectSchema as ProfileUncheckedUpdateWithoutChannelsInputObjectSchema } from './ProfileUncheckedUpdateWithoutChannelsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProfileWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ProfileUpdateWithoutChannelsInputObjectSchema), z.lazy(() => ProfileUncheckedUpdateWithoutChannelsInputObjectSchema)])
}).strict();
export const ProfileUpdateToOneWithWhereWithoutChannelsInputObjectSchema: z.ZodType<Prisma.ProfileUpdateToOneWithWhereWithoutChannelsInput> = makeSchema() as unknown as z.ZodType<Prisma.ProfileUpdateToOneWithWhereWithoutChannelsInput>;
export const ProfileUpdateToOneWithWhereWithoutChannelsInputObjectZodSchema = makeSchema();
