import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ProfileWhereUniqueInputObjectSchema as ProfileWhereUniqueInputObjectSchema } from './ProfileWhereUniqueInput.schema';
import { ProfileCreateWithoutChannelsInputObjectSchema as ProfileCreateWithoutChannelsInputObjectSchema } from './ProfileCreateWithoutChannelsInput.schema';
import { ProfileUncheckedCreateWithoutChannelsInputObjectSchema as ProfileUncheckedCreateWithoutChannelsInputObjectSchema } from './ProfileUncheckedCreateWithoutChannelsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProfileWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ProfileCreateWithoutChannelsInputObjectSchema), z.lazy(() => ProfileUncheckedCreateWithoutChannelsInputObjectSchema)])
}).strict();
export const ProfileCreateOrConnectWithoutChannelsInputObjectSchema: z.ZodType<Prisma.ProfileCreateOrConnectWithoutChannelsInput> = makeSchema() as unknown as z.ZodType<Prisma.ProfileCreateOrConnectWithoutChannelsInput>;
export const ProfileCreateOrConnectWithoutChannelsInputObjectZodSchema = makeSchema();
