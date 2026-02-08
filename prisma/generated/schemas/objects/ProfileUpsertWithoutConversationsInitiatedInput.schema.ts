import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ProfileUpdateWithoutConversationsInitiatedInputObjectSchema as ProfileUpdateWithoutConversationsInitiatedInputObjectSchema } from './ProfileUpdateWithoutConversationsInitiatedInput.schema';
import { ProfileUncheckedUpdateWithoutConversationsInitiatedInputObjectSchema as ProfileUncheckedUpdateWithoutConversationsInitiatedInputObjectSchema } from './ProfileUncheckedUpdateWithoutConversationsInitiatedInput.schema';
import { ProfileCreateWithoutConversationsInitiatedInputObjectSchema as ProfileCreateWithoutConversationsInitiatedInputObjectSchema } from './ProfileCreateWithoutConversationsInitiatedInput.schema';
import { ProfileUncheckedCreateWithoutConversationsInitiatedInputObjectSchema as ProfileUncheckedCreateWithoutConversationsInitiatedInputObjectSchema } from './ProfileUncheckedCreateWithoutConversationsInitiatedInput.schema';
import { ProfileWhereInputObjectSchema as ProfileWhereInputObjectSchema } from './ProfileWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => ProfileUpdateWithoutConversationsInitiatedInputObjectSchema), z.lazy(() => ProfileUncheckedUpdateWithoutConversationsInitiatedInputObjectSchema)]),
  create: z.union([z.lazy(() => ProfileCreateWithoutConversationsInitiatedInputObjectSchema), z.lazy(() => ProfileUncheckedCreateWithoutConversationsInitiatedInputObjectSchema)]),
  where: z.lazy(() => ProfileWhereInputObjectSchema).optional()
}).strict();
export const ProfileUpsertWithoutConversationsInitiatedInputObjectSchema: z.ZodType<Prisma.ProfileUpsertWithoutConversationsInitiatedInput> = makeSchema() as unknown as z.ZodType<Prisma.ProfileUpsertWithoutConversationsInitiatedInput>;
export const ProfileUpsertWithoutConversationsInitiatedInputObjectZodSchema = makeSchema();
