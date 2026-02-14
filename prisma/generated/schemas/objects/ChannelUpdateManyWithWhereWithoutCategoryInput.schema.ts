import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ChannelScalarWhereInputObjectSchema as ChannelScalarWhereInputObjectSchema } from './ChannelScalarWhereInput.schema';
import { ChannelUpdateManyMutationInputObjectSchema as ChannelUpdateManyMutationInputObjectSchema } from './ChannelUpdateManyMutationInput.schema';
import { ChannelUncheckedUpdateManyWithoutCategoryInputObjectSchema as ChannelUncheckedUpdateManyWithoutCategoryInputObjectSchema } from './ChannelUncheckedUpdateManyWithoutCategoryInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ChannelScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ChannelUpdateManyMutationInputObjectSchema), z.lazy(() => ChannelUncheckedUpdateManyWithoutCategoryInputObjectSchema)])
}).strict();
export const ChannelUpdateManyWithWhereWithoutCategoryInputObjectSchema: z.ZodType<Prisma.ChannelUpdateManyWithWhereWithoutCategoryInput> = makeSchema() as unknown as z.ZodType<Prisma.ChannelUpdateManyWithWhereWithoutCategoryInput>;
export const ChannelUpdateManyWithWhereWithoutCategoryInputObjectZodSchema = makeSchema();
