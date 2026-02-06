import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ProfileWhereUniqueInputObjectSchema as ProfileWhereUniqueInputObjectSchema } from './ProfileWhereUniqueInput.schema';
import { ProfileCreateWithoutDirectMessagesInputObjectSchema as ProfileCreateWithoutDirectMessagesInputObjectSchema } from './ProfileCreateWithoutDirectMessagesInput.schema';
import { ProfileUncheckedCreateWithoutDirectMessagesInputObjectSchema as ProfileUncheckedCreateWithoutDirectMessagesInputObjectSchema } from './ProfileUncheckedCreateWithoutDirectMessagesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProfileWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ProfileCreateWithoutDirectMessagesInputObjectSchema), z.lazy(() => ProfileUncheckedCreateWithoutDirectMessagesInputObjectSchema)])
}).strict();
export const ProfileCreateOrConnectWithoutDirectMessagesInputObjectSchema: z.ZodType<Prisma.ProfileCreateOrConnectWithoutDirectMessagesInput> = makeSchema() as unknown as z.ZodType<Prisma.ProfileCreateOrConnectWithoutDirectMessagesInput>;
export const ProfileCreateOrConnectWithoutDirectMessagesInputObjectZodSchema = makeSchema();
