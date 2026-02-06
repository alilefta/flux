import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ChannelCreateWithoutProfileInputObjectSchema as ChannelCreateWithoutProfileInputObjectSchema } from './ChannelCreateWithoutProfileInput.schema';
import { ChannelUncheckedCreateWithoutProfileInputObjectSchema as ChannelUncheckedCreateWithoutProfileInputObjectSchema } from './ChannelUncheckedCreateWithoutProfileInput.schema';
import { ChannelCreateOrConnectWithoutProfileInputObjectSchema as ChannelCreateOrConnectWithoutProfileInputObjectSchema } from './ChannelCreateOrConnectWithoutProfileInput.schema';
import { ChannelCreateManyProfileInputEnvelopeObjectSchema as ChannelCreateManyProfileInputEnvelopeObjectSchema } from './ChannelCreateManyProfileInputEnvelope.schema';
import { ChannelWhereUniqueInputObjectSchema as ChannelWhereUniqueInputObjectSchema } from './ChannelWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ChannelCreateWithoutProfileInputObjectSchema), z.lazy(() => ChannelCreateWithoutProfileInputObjectSchema).array(), z.lazy(() => ChannelUncheckedCreateWithoutProfileInputObjectSchema), z.lazy(() => ChannelUncheckedCreateWithoutProfileInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ChannelCreateOrConnectWithoutProfileInputObjectSchema), z.lazy(() => ChannelCreateOrConnectWithoutProfileInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ChannelCreateManyProfileInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ChannelWhereUniqueInputObjectSchema), z.lazy(() => ChannelWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ChannelCreateNestedManyWithoutProfileInputObjectSchema: z.ZodType<Prisma.ChannelCreateNestedManyWithoutProfileInput> = makeSchema() as unknown as z.ZodType<Prisma.ChannelCreateNestedManyWithoutProfileInput>;
export const ChannelCreateNestedManyWithoutProfileInputObjectZodSchema = makeSchema();
