import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ProfileUpdateWithoutDirectMessagesInputObjectSchema as ProfileUpdateWithoutDirectMessagesInputObjectSchema } from './ProfileUpdateWithoutDirectMessagesInput.schema';
import { ProfileUncheckedUpdateWithoutDirectMessagesInputObjectSchema as ProfileUncheckedUpdateWithoutDirectMessagesInputObjectSchema } from './ProfileUncheckedUpdateWithoutDirectMessagesInput.schema';
import { ProfileCreateWithoutDirectMessagesInputObjectSchema as ProfileCreateWithoutDirectMessagesInputObjectSchema } from './ProfileCreateWithoutDirectMessagesInput.schema';
import { ProfileUncheckedCreateWithoutDirectMessagesInputObjectSchema as ProfileUncheckedCreateWithoutDirectMessagesInputObjectSchema } from './ProfileUncheckedCreateWithoutDirectMessagesInput.schema';
import { ProfileWhereInputObjectSchema as ProfileWhereInputObjectSchema } from './ProfileWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => ProfileUpdateWithoutDirectMessagesInputObjectSchema), z.lazy(() => ProfileUncheckedUpdateWithoutDirectMessagesInputObjectSchema)]),
  create: z.union([z.lazy(() => ProfileCreateWithoutDirectMessagesInputObjectSchema), z.lazy(() => ProfileUncheckedCreateWithoutDirectMessagesInputObjectSchema)]),
  where: z.lazy(() => ProfileWhereInputObjectSchema).optional()
}).strict();
export const ProfileUpsertWithoutDirectMessagesInputObjectSchema: z.ZodType<Prisma.ProfileUpsertWithoutDirectMessagesInput> = makeSchema() as unknown as z.ZodType<Prisma.ProfileUpsertWithoutDirectMessagesInput>;
export const ProfileUpsertWithoutDirectMessagesInputObjectZodSchema = makeSchema();
