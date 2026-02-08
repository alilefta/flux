import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ChannelScalarWhereInputObjectSchema as ChannelScalarWhereInputObjectSchema } from './ChannelScalarWhereInput.schema';
import { ChannelUpdateManyMutationInputObjectSchema as ChannelUpdateManyMutationInputObjectSchema } from './ChannelUpdateManyMutationInput.schema';
import { ChannelUncheckedUpdateManyWithoutServerInputObjectSchema as ChannelUncheckedUpdateManyWithoutServerInputObjectSchema } from './ChannelUncheckedUpdateManyWithoutServerInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ChannelScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ChannelUpdateManyMutationInputObjectSchema), z.lazy(() => ChannelUncheckedUpdateManyWithoutServerInputObjectSchema)])
}).strict();
export const ChannelUpdateManyWithWhereWithoutServerInputObjectSchema: z.ZodType<Prisma.ChannelUpdateManyWithWhereWithoutServerInput> = makeSchema() as unknown as z.ZodType<Prisma.ChannelUpdateManyWithWhereWithoutServerInput>;
export const ChannelUpdateManyWithWhereWithoutServerInputObjectZodSchema = makeSchema();
