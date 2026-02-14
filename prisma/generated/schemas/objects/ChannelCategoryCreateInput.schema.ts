import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ServerCreateNestedOneWithoutCategoriesInputObjectSchema as ServerCreateNestedOneWithoutCategoriesInputObjectSchema } from './ServerCreateNestedOneWithoutCategoriesInput.schema';
import { ChannelCreateNestedManyWithoutCategoryInputObjectSchema as ChannelCreateNestedManyWithoutCategoryInputObjectSchema } from './ChannelCreateNestedManyWithoutCategoryInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  position: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  server: z.lazy(() => ServerCreateNestedOneWithoutCategoriesInputObjectSchema),
  channels: z.lazy(() => ChannelCreateNestedManyWithoutCategoryInputObjectSchema).optional()
}).strict();
export const ChannelCategoryCreateInputObjectSchema: z.ZodType<Prisma.ChannelCategoryCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ChannelCategoryCreateInput>;
export const ChannelCategoryCreateInputObjectZodSchema = makeSchema();
