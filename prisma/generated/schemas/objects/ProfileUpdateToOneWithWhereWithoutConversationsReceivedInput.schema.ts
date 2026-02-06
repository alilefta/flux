import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ProfileWhereInputObjectSchema as ProfileWhereInputObjectSchema } from './ProfileWhereInput.schema';
import { ProfileUpdateWithoutConversationsReceivedInputObjectSchema as ProfileUpdateWithoutConversationsReceivedInputObjectSchema } from './ProfileUpdateWithoutConversationsReceivedInput.schema';
import { ProfileUncheckedUpdateWithoutConversationsReceivedInputObjectSchema as ProfileUncheckedUpdateWithoutConversationsReceivedInputObjectSchema } from './ProfileUncheckedUpdateWithoutConversationsReceivedInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProfileWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ProfileUpdateWithoutConversationsReceivedInputObjectSchema), z.lazy(() => ProfileUncheckedUpdateWithoutConversationsReceivedInputObjectSchema)])
}).strict();
export const ProfileUpdateToOneWithWhereWithoutConversationsReceivedInputObjectSchema: z.ZodType<Prisma.ProfileUpdateToOneWithWhereWithoutConversationsReceivedInput> = makeSchema() as unknown as z.ZodType<Prisma.ProfileUpdateToOneWithWhereWithoutConversationsReceivedInput>;
export const ProfileUpdateToOneWithWhereWithoutConversationsReceivedInputObjectZodSchema = makeSchema();
