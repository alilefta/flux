import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ProfileWhereInputObjectSchema as ProfileWhereInputObjectSchema } from './ProfileWhereInput.schema';
import { ProfileUpdateWithoutServersInputObjectSchema as ProfileUpdateWithoutServersInputObjectSchema } from './ProfileUpdateWithoutServersInput.schema';
import { ProfileUncheckedUpdateWithoutServersInputObjectSchema as ProfileUncheckedUpdateWithoutServersInputObjectSchema } from './ProfileUncheckedUpdateWithoutServersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProfileWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ProfileUpdateWithoutServersInputObjectSchema), z.lazy(() => ProfileUncheckedUpdateWithoutServersInputObjectSchema)])
}).strict();
export const ProfileUpdateToOneWithWhereWithoutServersInputObjectSchema: z.ZodType<Prisma.ProfileUpdateToOneWithWhereWithoutServersInput> = makeSchema() as unknown as z.ZodType<Prisma.ProfileUpdateToOneWithWhereWithoutServersInput>;
export const ProfileUpdateToOneWithWhereWithoutServersInputObjectZodSchema = makeSchema();
