import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ChannelCreateWithoutCategoryInputObjectSchema as ChannelCreateWithoutCategoryInputObjectSchema } from './ChannelCreateWithoutCategoryInput.schema';
import { ChannelUncheckedCreateWithoutCategoryInputObjectSchema as ChannelUncheckedCreateWithoutCategoryInputObjectSchema } from './ChannelUncheckedCreateWithoutCategoryInput.schema';
import { ChannelCreateOrConnectWithoutCategoryInputObjectSchema as ChannelCreateOrConnectWithoutCategoryInputObjectSchema } from './ChannelCreateOrConnectWithoutCategoryInput.schema';
import { ChannelCreateManyCategoryInputEnvelopeObjectSchema as ChannelCreateManyCategoryInputEnvelopeObjectSchema } from './ChannelCreateManyCategoryInputEnvelope.schema';
import { ChannelWhereUniqueInputObjectSchema as ChannelWhereUniqueInputObjectSchema } from './ChannelWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ChannelCreateWithoutCategoryInputObjectSchema), z.lazy(() => ChannelCreateWithoutCategoryInputObjectSchema).array(), z.lazy(() => ChannelUncheckedCreateWithoutCategoryInputObjectSchema), z.lazy(() => ChannelUncheckedCreateWithoutCategoryInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ChannelCreateOrConnectWithoutCategoryInputObjectSchema), z.lazy(() => ChannelCreateOrConnectWithoutCategoryInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ChannelCreateManyCategoryInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ChannelWhereUniqueInputObjectSchema), z.lazy(() => ChannelWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ChannelUncheckedCreateNestedManyWithoutCategoryInputObjectSchema: z.ZodType<Prisma.ChannelUncheckedCreateNestedManyWithoutCategoryInput> = makeSchema() as unknown as z.ZodType<Prisma.ChannelUncheckedCreateNestedManyWithoutCategoryInput>;
export const ChannelUncheckedCreateNestedManyWithoutCategoryInputObjectZodSchema = makeSchema();
