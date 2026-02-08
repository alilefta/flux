import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ProfileCreateWithoutConversationsReceivedInputObjectSchema as ProfileCreateWithoutConversationsReceivedInputObjectSchema } from './ProfileCreateWithoutConversationsReceivedInput.schema';
import { ProfileUncheckedCreateWithoutConversationsReceivedInputObjectSchema as ProfileUncheckedCreateWithoutConversationsReceivedInputObjectSchema } from './ProfileUncheckedCreateWithoutConversationsReceivedInput.schema';
import { ProfileCreateOrConnectWithoutConversationsReceivedInputObjectSchema as ProfileCreateOrConnectWithoutConversationsReceivedInputObjectSchema } from './ProfileCreateOrConnectWithoutConversationsReceivedInput.schema';
import { ProfileUpsertWithoutConversationsReceivedInputObjectSchema as ProfileUpsertWithoutConversationsReceivedInputObjectSchema } from './ProfileUpsertWithoutConversationsReceivedInput.schema';
import { ProfileWhereUniqueInputObjectSchema as ProfileWhereUniqueInputObjectSchema } from './ProfileWhereUniqueInput.schema';
import { ProfileUpdateToOneWithWhereWithoutConversationsReceivedInputObjectSchema as ProfileUpdateToOneWithWhereWithoutConversationsReceivedInputObjectSchema } from './ProfileUpdateToOneWithWhereWithoutConversationsReceivedInput.schema';
import { ProfileUpdateWithoutConversationsReceivedInputObjectSchema as ProfileUpdateWithoutConversationsReceivedInputObjectSchema } from './ProfileUpdateWithoutConversationsReceivedInput.schema';
import { ProfileUncheckedUpdateWithoutConversationsReceivedInputObjectSchema as ProfileUncheckedUpdateWithoutConversationsReceivedInputObjectSchema } from './ProfileUncheckedUpdateWithoutConversationsReceivedInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ProfileCreateWithoutConversationsReceivedInputObjectSchema), z.lazy(() => ProfileUncheckedCreateWithoutConversationsReceivedInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ProfileCreateOrConnectWithoutConversationsReceivedInputObjectSchema).optional(),
  upsert: z.lazy(() => ProfileUpsertWithoutConversationsReceivedInputObjectSchema).optional(),
  connect: z.lazy(() => ProfileWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ProfileUpdateToOneWithWhereWithoutConversationsReceivedInputObjectSchema), z.lazy(() => ProfileUpdateWithoutConversationsReceivedInputObjectSchema), z.lazy(() => ProfileUncheckedUpdateWithoutConversationsReceivedInputObjectSchema)]).optional()
}).strict();
export const ProfileUpdateOneRequiredWithoutConversationsReceivedNestedInputObjectSchema: z.ZodType<Prisma.ProfileUpdateOneRequiredWithoutConversationsReceivedNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ProfileUpdateOneRequiredWithoutConversationsReceivedNestedInput>;
export const ProfileUpdateOneRequiredWithoutConversationsReceivedNestedInputObjectZodSchema = makeSchema();
