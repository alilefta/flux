import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ProfileUpdateWithoutConversationsReceivedInputObjectSchema as ProfileUpdateWithoutConversationsReceivedInputObjectSchema } from './ProfileUpdateWithoutConversationsReceivedInput.schema';
import { ProfileUncheckedUpdateWithoutConversationsReceivedInputObjectSchema as ProfileUncheckedUpdateWithoutConversationsReceivedInputObjectSchema } from './ProfileUncheckedUpdateWithoutConversationsReceivedInput.schema';
import { ProfileCreateWithoutConversationsReceivedInputObjectSchema as ProfileCreateWithoutConversationsReceivedInputObjectSchema } from './ProfileCreateWithoutConversationsReceivedInput.schema';
import { ProfileUncheckedCreateWithoutConversationsReceivedInputObjectSchema as ProfileUncheckedCreateWithoutConversationsReceivedInputObjectSchema } from './ProfileUncheckedCreateWithoutConversationsReceivedInput.schema';
import { ProfileWhereInputObjectSchema as ProfileWhereInputObjectSchema } from './ProfileWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => ProfileUpdateWithoutConversationsReceivedInputObjectSchema), z.lazy(() => ProfileUncheckedUpdateWithoutConversationsReceivedInputObjectSchema)]),
  create: z.union([z.lazy(() => ProfileCreateWithoutConversationsReceivedInputObjectSchema), z.lazy(() => ProfileUncheckedCreateWithoutConversationsReceivedInputObjectSchema)]),
  where: z.lazy(() => ProfileWhereInputObjectSchema).optional()
}).strict();
export const ProfileUpsertWithoutConversationsReceivedInputObjectSchema: z.ZodType<Prisma.ProfileUpsertWithoutConversationsReceivedInput> = makeSchema() as unknown as z.ZodType<Prisma.ProfileUpsertWithoutConversationsReceivedInput>;
export const ProfileUpsertWithoutConversationsReceivedInputObjectZodSchema = makeSchema();
