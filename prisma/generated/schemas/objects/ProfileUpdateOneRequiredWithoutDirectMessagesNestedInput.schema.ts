import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ProfileCreateWithoutDirectMessagesInputObjectSchema as ProfileCreateWithoutDirectMessagesInputObjectSchema } from './ProfileCreateWithoutDirectMessagesInput.schema';
import { ProfileUncheckedCreateWithoutDirectMessagesInputObjectSchema as ProfileUncheckedCreateWithoutDirectMessagesInputObjectSchema } from './ProfileUncheckedCreateWithoutDirectMessagesInput.schema';
import { ProfileCreateOrConnectWithoutDirectMessagesInputObjectSchema as ProfileCreateOrConnectWithoutDirectMessagesInputObjectSchema } from './ProfileCreateOrConnectWithoutDirectMessagesInput.schema';
import { ProfileUpsertWithoutDirectMessagesInputObjectSchema as ProfileUpsertWithoutDirectMessagesInputObjectSchema } from './ProfileUpsertWithoutDirectMessagesInput.schema';
import { ProfileWhereUniqueInputObjectSchema as ProfileWhereUniqueInputObjectSchema } from './ProfileWhereUniqueInput.schema';
import { ProfileUpdateToOneWithWhereWithoutDirectMessagesInputObjectSchema as ProfileUpdateToOneWithWhereWithoutDirectMessagesInputObjectSchema } from './ProfileUpdateToOneWithWhereWithoutDirectMessagesInput.schema';
import { ProfileUpdateWithoutDirectMessagesInputObjectSchema as ProfileUpdateWithoutDirectMessagesInputObjectSchema } from './ProfileUpdateWithoutDirectMessagesInput.schema';
import { ProfileUncheckedUpdateWithoutDirectMessagesInputObjectSchema as ProfileUncheckedUpdateWithoutDirectMessagesInputObjectSchema } from './ProfileUncheckedUpdateWithoutDirectMessagesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ProfileCreateWithoutDirectMessagesInputObjectSchema), z.lazy(() => ProfileUncheckedCreateWithoutDirectMessagesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ProfileCreateOrConnectWithoutDirectMessagesInputObjectSchema).optional(),
  upsert: z.lazy(() => ProfileUpsertWithoutDirectMessagesInputObjectSchema).optional(),
  connect: z.lazy(() => ProfileWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ProfileUpdateToOneWithWhereWithoutDirectMessagesInputObjectSchema), z.lazy(() => ProfileUpdateWithoutDirectMessagesInputObjectSchema), z.lazy(() => ProfileUncheckedUpdateWithoutDirectMessagesInputObjectSchema)]).optional()
}).strict();
export const ProfileUpdateOneRequiredWithoutDirectMessagesNestedInputObjectSchema: z.ZodType<Prisma.ProfileUpdateOneRequiredWithoutDirectMessagesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ProfileUpdateOneRequiredWithoutDirectMessagesNestedInput>;
export const ProfileUpdateOneRequiredWithoutDirectMessagesNestedInputObjectZodSchema = makeSchema();
