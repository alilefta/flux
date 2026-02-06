import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ProfileWhereInputObjectSchema as ProfileWhereInputObjectSchema } from './ProfileWhereInput.schema';
import { ProfileUpdateWithoutConversationsInitiatedInputObjectSchema as ProfileUpdateWithoutConversationsInitiatedInputObjectSchema } from './ProfileUpdateWithoutConversationsInitiatedInput.schema';
import { ProfileUncheckedUpdateWithoutConversationsInitiatedInputObjectSchema as ProfileUncheckedUpdateWithoutConversationsInitiatedInputObjectSchema } from './ProfileUncheckedUpdateWithoutConversationsInitiatedInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProfileWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ProfileUpdateWithoutConversationsInitiatedInputObjectSchema), z.lazy(() => ProfileUncheckedUpdateWithoutConversationsInitiatedInputObjectSchema)])
}).strict();
export const ProfileUpdateToOneWithWhereWithoutConversationsInitiatedInputObjectSchema: z.ZodType<Prisma.ProfileUpdateToOneWithWhereWithoutConversationsInitiatedInput> = makeSchema() as unknown as z.ZodType<Prisma.ProfileUpdateToOneWithWhereWithoutConversationsInitiatedInput>;
export const ProfileUpdateToOneWithWhereWithoutConversationsInitiatedInputObjectZodSchema = makeSchema();
