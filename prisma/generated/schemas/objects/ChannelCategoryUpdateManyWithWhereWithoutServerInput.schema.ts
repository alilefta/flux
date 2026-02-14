import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ChannelCategoryScalarWhereInputObjectSchema as ChannelCategoryScalarWhereInputObjectSchema } from './ChannelCategoryScalarWhereInput.schema';
import { ChannelCategoryUpdateManyMutationInputObjectSchema as ChannelCategoryUpdateManyMutationInputObjectSchema } from './ChannelCategoryUpdateManyMutationInput.schema';
import { ChannelCategoryUncheckedUpdateManyWithoutServerInputObjectSchema as ChannelCategoryUncheckedUpdateManyWithoutServerInputObjectSchema } from './ChannelCategoryUncheckedUpdateManyWithoutServerInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ChannelCategoryScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ChannelCategoryUpdateManyMutationInputObjectSchema), z.lazy(() => ChannelCategoryUncheckedUpdateManyWithoutServerInputObjectSchema)])
}).strict();
export const ChannelCategoryUpdateManyWithWhereWithoutServerInputObjectSchema: z.ZodType<Prisma.ChannelCategoryUpdateManyWithWhereWithoutServerInput> = makeSchema() as unknown as z.ZodType<Prisma.ChannelCategoryUpdateManyWithWhereWithoutServerInput>;
export const ChannelCategoryUpdateManyWithWhereWithoutServerInputObjectZodSchema = makeSchema();
