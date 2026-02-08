import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ProfileCreateWithoutConversationsReceivedInputObjectSchema as ProfileCreateWithoutConversationsReceivedInputObjectSchema } from './ProfileCreateWithoutConversationsReceivedInput.schema';
import { ProfileUncheckedCreateWithoutConversationsReceivedInputObjectSchema as ProfileUncheckedCreateWithoutConversationsReceivedInputObjectSchema } from './ProfileUncheckedCreateWithoutConversationsReceivedInput.schema';
import { ProfileCreateOrConnectWithoutConversationsReceivedInputObjectSchema as ProfileCreateOrConnectWithoutConversationsReceivedInputObjectSchema } from './ProfileCreateOrConnectWithoutConversationsReceivedInput.schema';
import { ProfileWhereUniqueInputObjectSchema as ProfileWhereUniqueInputObjectSchema } from './ProfileWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ProfileCreateWithoutConversationsReceivedInputObjectSchema), z.lazy(() => ProfileUncheckedCreateWithoutConversationsReceivedInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ProfileCreateOrConnectWithoutConversationsReceivedInputObjectSchema).optional(),
  connect: z.lazy(() => ProfileWhereUniqueInputObjectSchema).optional()
}).strict();
export const ProfileCreateNestedOneWithoutConversationsReceivedInputObjectSchema: z.ZodType<Prisma.ProfileCreateNestedOneWithoutConversationsReceivedInput> = makeSchema() as unknown as z.ZodType<Prisma.ProfileCreateNestedOneWithoutConversationsReceivedInput>;
export const ProfileCreateNestedOneWithoutConversationsReceivedInputObjectZodSchema = makeSchema();
