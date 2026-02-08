import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ProfileCreateWithoutConversationsInitiatedInputObjectSchema as ProfileCreateWithoutConversationsInitiatedInputObjectSchema } from './ProfileCreateWithoutConversationsInitiatedInput.schema';
import { ProfileUncheckedCreateWithoutConversationsInitiatedInputObjectSchema as ProfileUncheckedCreateWithoutConversationsInitiatedInputObjectSchema } from './ProfileUncheckedCreateWithoutConversationsInitiatedInput.schema';
import { ProfileCreateOrConnectWithoutConversationsInitiatedInputObjectSchema as ProfileCreateOrConnectWithoutConversationsInitiatedInputObjectSchema } from './ProfileCreateOrConnectWithoutConversationsInitiatedInput.schema';
import { ProfileUpsertWithoutConversationsInitiatedInputObjectSchema as ProfileUpsertWithoutConversationsInitiatedInputObjectSchema } from './ProfileUpsertWithoutConversationsInitiatedInput.schema';
import { ProfileWhereUniqueInputObjectSchema as ProfileWhereUniqueInputObjectSchema } from './ProfileWhereUniqueInput.schema';
import { ProfileUpdateToOneWithWhereWithoutConversationsInitiatedInputObjectSchema as ProfileUpdateToOneWithWhereWithoutConversationsInitiatedInputObjectSchema } from './ProfileUpdateToOneWithWhereWithoutConversationsInitiatedInput.schema';
import { ProfileUpdateWithoutConversationsInitiatedInputObjectSchema as ProfileUpdateWithoutConversationsInitiatedInputObjectSchema } from './ProfileUpdateWithoutConversationsInitiatedInput.schema';
import { ProfileUncheckedUpdateWithoutConversationsInitiatedInputObjectSchema as ProfileUncheckedUpdateWithoutConversationsInitiatedInputObjectSchema } from './ProfileUncheckedUpdateWithoutConversationsInitiatedInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ProfileCreateWithoutConversationsInitiatedInputObjectSchema), z.lazy(() => ProfileUncheckedCreateWithoutConversationsInitiatedInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ProfileCreateOrConnectWithoutConversationsInitiatedInputObjectSchema).optional(),
  upsert: z.lazy(() => ProfileUpsertWithoutConversationsInitiatedInputObjectSchema).optional(),
  connect: z.lazy(() => ProfileWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ProfileUpdateToOneWithWhereWithoutConversationsInitiatedInputObjectSchema), z.lazy(() => ProfileUpdateWithoutConversationsInitiatedInputObjectSchema), z.lazy(() => ProfileUncheckedUpdateWithoutConversationsInitiatedInputObjectSchema)]).optional()
}).strict();
export const ProfileUpdateOneRequiredWithoutConversationsInitiatedNestedInputObjectSchema: z.ZodType<Prisma.ProfileUpdateOneRequiredWithoutConversationsInitiatedNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ProfileUpdateOneRequiredWithoutConversationsInitiatedNestedInput>;
export const ProfileUpdateOneRequiredWithoutConversationsInitiatedNestedInputObjectZodSchema = makeSchema();
