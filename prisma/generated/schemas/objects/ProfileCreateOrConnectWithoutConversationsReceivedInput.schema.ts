import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ProfileWhereUniqueInputObjectSchema as ProfileWhereUniqueInputObjectSchema } from './ProfileWhereUniqueInput.schema';
import { ProfileCreateWithoutConversationsReceivedInputObjectSchema as ProfileCreateWithoutConversationsReceivedInputObjectSchema } from './ProfileCreateWithoutConversationsReceivedInput.schema';
import { ProfileUncheckedCreateWithoutConversationsReceivedInputObjectSchema as ProfileUncheckedCreateWithoutConversationsReceivedInputObjectSchema } from './ProfileUncheckedCreateWithoutConversationsReceivedInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProfileWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ProfileCreateWithoutConversationsReceivedInputObjectSchema), z.lazy(() => ProfileUncheckedCreateWithoutConversationsReceivedInputObjectSchema)])
}).strict();
export const ProfileCreateOrConnectWithoutConversationsReceivedInputObjectSchema: z.ZodType<Prisma.ProfileCreateOrConnectWithoutConversationsReceivedInput> = makeSchema() as unknown as z.ZodType<Prisma.ProfileCreateOrConnectWithoutConversationsReceivedInput>;
export const ProfileCreateOrConnectWithoutConversationsReceivedInputObjectZodSchema = makeSchema();
