import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ChannelWhereUniqueInputObjectSchema as ChannelWhereUniqueInputObjectSchema } from './ChannelWhereUniqueInput.schema';
import { ChannelUpdateWithoutProfileInputObjectSchema as ChannelUpdateWithoutProfileInputObjectSchema } from './ChannelUpdateWithoutProfileInput.schema';
import { ChannelUncheckedUpdateWithoutProfileInputObjectSchema as ChannelUncheckedUpdateWithoutProfileInputObjectSchema } from './ChannelUncheckedUpdateWithoutProfileInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ChannelWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ChannelUpdateWithoutProfileInputObjectSchema), z.lazy(() => ChannelUncheckedUpdateWithoutProfileInputObjectSchema)])
}).strict();
export const ChannelUpdateWithWhereUniqueWithoutProfileInputObjectSchema: z.ZodType<Prisma.ChannelUpdateWithWhereUniqueWithoutProfileInput> = makeSchema() as unknown as z.ZodType<Prisma.ChannelUpdateWithWhereUniqueWithoutProfileInput>;
export const ChannelUpdateWithWhereUniqueWithoutProfileInputObjectZodSchema = makeSchema();
