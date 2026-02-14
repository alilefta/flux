import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ChannelCategoryWhereInputObjectSchema as ChannelCategoryWhereInputObjectSchema } from './ChannelCategoryWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ChannelCategoryWhereInputObjectSchema).optional()
}).strict();
export const ServerCountOutputTypeCountCategoriesArgsObjectSchema = makeSchema();
export const ServerCountOutputTypeCountCategoriesArgsObjectZodSchema = makeSchema();
