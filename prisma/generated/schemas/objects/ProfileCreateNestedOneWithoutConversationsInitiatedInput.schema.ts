import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ProfileCreateWithoutConversationsInitiatedInputObjectSchema as ProfileCreateWithoutConversationsInitiatedInputObjectSchema } from './ProfileCreateWithoutConversationsInitiatedInput.schema';
import { ProfileUncheckedCreateWithoutConversationsInitiatedInputObjectSchema as ProfileUncheckedCreateWithoutConversationsInitiatedInputObjectSchema } from './ProfileUncheckedCreateWithoutConversationsInitiatedInput.schema';
import { ProfileCreateOrConnectWithoutConversationsInitiatedInputObjectSchema as ProfileCreateOrConnectWithoutConversationsInitiatedInputObjectSchema } from './ProfileCreateOrConnectWithoutConversationsInitiatedInput.schema';
import { ProfileWhereUniqueInputObjectSchema as ProfileWhereUniqueInputObjectSchema } from './ProfileWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ProfileCreateWithoutConversationsInitiatedInputObjectSchema), z.lazy(() => ProfileUncheckedCreateWithoutConversationsInitiatedInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ProfileCreateOrConnectWithoutConversationsInitiatedInputObjectSchema).optional(),
  connect: z.lazy(() => ProfileWhereUniqueInputObjectSchema).optional()
}).strict();
export const ProfileCreateNestedOneWithoutConversationsInitiatedInputObjectSchema: z.ZodType<Prisma.ProfileCreateNestedOneWithoutConversationsInitiatedInput> = makeSchema() as unknown as z.ZodType<Prisma.ProfileCreateNestedOneWithoutConversationsInitiatedInput>;
export const ProfileCreateNestedOneWithoutConversationsInitiatedInputObjectZodSchema = makeSchema();
