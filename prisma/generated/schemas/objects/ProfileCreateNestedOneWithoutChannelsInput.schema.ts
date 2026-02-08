import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ProfileCreateWithoutChannelsInputObjectSchema as ProfileCreateWithoutChannelsInputObjectSchema } from './ProfileCreateWithoutChannelsInput.schema';
import { ProfileUncheckedCreateWithoutChannelsInputObjectSchema as ProfileUncheckedCreateWithoutChannelsInputObjectSchema } from './ProfileUncheckedCreateWithoutChannelsInput.schema';
import { ProfileCreateOrConnectWithoutChannelsInputObjectSchema as ProfileCreateOrConnectWithoutChannelsInputObjectSchema } from './ProfileCreateOrConnectWithoutChannelsInput.schema';
import { ProfileWhereUniqueInputObjectSchema as ProfileWhereUniqueInputObjectSchema } from './ProfileWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ProfileCreateWithoutChannelsInputObjectSchema), z.lazy(() => ProfileUncheckedCreateWithoutChannelsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ProfileCreateOrConnectWithoutChannelsInputObjectSchema).optional(),
  connect: z.lazy(() => ProfileWhereUniqueInputObjectSchema).optional()
}).strict();
export const ProfileCreateNestedOneWithoutChannelsInputObjectSchema: z.ZodType<Prisma.ProfileCreateNestedOneWithoutChannelsInput> = makeSchema() as unknown as z.ZodType<Prisma.ProfileCreateNestedOneWithoutChannelsInput>;
export const ProfileCreateNestedOneWithoutChannelsInputObjectZodSchema = makeSchema();
