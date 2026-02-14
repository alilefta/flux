import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ServerCreateNestedOneWithoutCategoriesInputObjectSchema as ServerCreateNestedOneWithoutCategoriesInputObjectSchema } from './ServerCreateNestedOneWithoutCategoriesInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  position: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  server: z.lazy(() => ServerCreateNestedOneWithoutCategoriesInputObjectSchema)
}).strict();
export const ChannelCategoryCreateWithoutChannelsInputObjectSchema: z.ZodType<Prisma.ChannelCategoryCreateWithoutChannelsInput> = makeSchema() as unknown as z.ZodType<Prisma.ChannelCategoryCreateWithoutChannelsInput>;
export const ChannelCategoryCreateWithoutChannelsInputObjectZodSchema = makeSchema();
