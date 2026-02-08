import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ProfileWhereInputObjectSchema as ProfileWhereInputObjectSchema } from './ProfileWhereInput.schema';
import { ProfileUpdateWithoutDirectMessagesInputObjectSchema as ProfileUpdateWithoutDirectMessagesInputObjectSchema } from './ProfileUpdateWithoutDirectMessagesInput.schema';
import { ProfileUncheckedUpdateWithoutDirectMessagesInputObjectSchema as ProfileUncheckedUpdateWithoutDirectMessagesInputObjectSchema } from './ProfileUncheckedUpdateWithoutDirectMessagesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProfileWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ProfileUpdateWithoutDirectMessagesInputObjectSchema), z.lazy(() => ProfileUncheckedUpdateWithoutDirectMessagesInputObjectSchema)])
}).strict();
export const ProfileUpdateToOneWithWhereWithoutDirectMessagesInputObjectSchema: z.ZodType<Prisma.ProfileUpdateToOneWithWhereWithoutDirectMessagesInput> = makeSchema() as unknown as z.ZodType<Prisma.ProfileUpdateToOneWithWhereWithoutDirectMessagesInput>;
export const ProfileUpdateToOneWithWhereWithoutDirectMessagesInputObjectZodSchema = makeSchema();
