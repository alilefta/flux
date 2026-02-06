import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ProfileCreateWithoutDirectMessagesInputObjectSchema as ProfileCreateWithoutDirectMessagesInputObjectSchema } from './ProfileCreateWithoutDirectMessagesInput.schema';
import { ProfileUncheckedCreateWithoutDirectMessagesInputObjectSchema as ProfileUncheckedCreateWithoutDirectMessagesInputObjectSchema } from './ProfileUncheckedCreateWithoutDirectMessagesInput.schema';
import { ProfileCreateOrConnectWithoutDirectMessagesInputObjectSchema as ProfileCreateOrConnectWithoutDirectMessagesInputObjectSchema } from './ProfileCreateOrConnectWithoutDirectMessagesInput.schema';
import { ProfileWhereUniqueInputObjectSchema as ProfileWhereUniqueInputObjectSchema } from './ProfileWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ProfileCreateWithoutDirectMessagesInputObjectSchema), z.lazy(() => ProfileUncheckedCreateWithoutDirectMessagesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ProfileCreateOrConnectWithoutDirectMessagesInputObjectSchema).optional(),
  connect: z.lazy(() => ProfileWhereUniqueInputObjectSchema).optional()
}).strict();
export const ProfileCreateNestedOneWithoutDirectMessagesInputObjectSchema: z.ZodType<Prisma.ProfileCreateNestedOneWithoutDirectMessagesInput> = makeSchema() as unknown as z.ZodType<Prisma.ProfileCreateNestedOneWithoutDirectMessagesInput>;
export const ProfileCreateNestedOneWithoutDirectMessagesInputObjectZodSchema = makeSchema();
