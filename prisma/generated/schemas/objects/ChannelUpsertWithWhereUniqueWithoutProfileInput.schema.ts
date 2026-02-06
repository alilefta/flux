import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ChannelWhereUniqueInputObjectSchema as ChannelWhereUniqueInputObjectSchema } from './ChannelWhereUniqueInput.schema';
import { ChannelUpdateWithoutProfileInputObjectSchema as ChannelUpdateWithoutProfileInputObjectSchema } from './ChannelUpdateWithoutProfileInput.schema';
import { ChannelUncheckedUpdateWithoutProfileInputObjectSchema as ChannelUncheckedUpdateWithoutProfileInputObjectSchema } from './ChannelUncheckedUpdateWithoutProfileInput.schema';
import { ChannelCreateWithoutProfileInputObjectSchema as ChannelCreateWithoutProfileInputObjectSchema } from './ChannelCreateWithoutProfileInput.schema';
import { ChannelUncheckedCreateWithoutProfileInputObjectSchema as ChannelUncheckedCreateWithoutProfileInputObjectSchema } from './ChannelUncheckedCreateWithoutProfileInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ChannelWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ChannelUpdateWithoutProfileInputObjectSchema), z.lazy(() => ChannelUncheckedUpdateWithoutProfileInputObjectSchema)]),
  create: z.union([z.lazy(() => ChannelCreateWithoutProfileInputObjectSchema), z.lazy(() => ChannelUncheckedCreateWithoutProfileInputObjectSchema)])
}).strict();
export const ChannelUpsertWithWhereUniqueWithoutProfileInputObjectSchema: z.ZodType<Prisma.ChannelUpsertWithWhereUniqueWithoutProfileInput> = makeSchema() as unknown as z.ZodType<Prisma.ChannelUpsertWithWhereUniqueWithoutProfileInput>;
export const ChannelUpsertWithWhereUniqueWithoutProfileInputObjectZodSchema = makeSchema();
