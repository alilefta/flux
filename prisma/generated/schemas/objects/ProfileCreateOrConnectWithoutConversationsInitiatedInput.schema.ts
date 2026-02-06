import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ProfileWhereUniqueInputObjectSchema as ProfileWhereUniqueInputObjectSchema } from './ProfileWhereUniqueInput.schema';
import { ProfileCreateWithoutConversationsInitiatedInputObjectSchema as ProfileCreateWithoutConversationsInitiatedInputObjectSchema } from './ProfileCreateWithoutConversationsInitiatedInput.schema';
import { ProfileUncheckedCreateWithoutConversationsInitiatedInputObjectSchema as ProfileUncheckedCreateWithoutConversationsInitiatedInputObjectSchema } from './ProfileUncheckedCreateWithoutConversationsInitiatedInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProfileWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ProfileCreateWithoutConversationsInitiatedInputObjectSchema), z.lazy(() => ProfileUncheckedCreateWithoutConversationsInitiatedInputObjectSchema)])
}).strict();
export const ProfileCreateOrConnectWithoutConversationsInitiatedInputObjectSchema: z.ZodType<Prisma.ProfileCreateOrConnectWithoutConversationsInitiatedInput> = makeSchema() as unknown as z.ZodType<Prisma.ProfileCreateOrConnectWithoutConversationsInitiatedInput>;
export const ProfileCreateOrConnectWithoutConversationsInitiatedInputObjectZodSchema = makeSchema();
