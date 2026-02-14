import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { ServerUpdateOneRequiredWithoutCategoriesNestedInputObjectSchema as ServerUpdateOneRequiredWithoutCategoriesNestedInputObjectSchema } from './ServerUpdateOneRequiredWithoutCategoriesNestedInput.schema';
import { ChannelUpdateManyWithoutCategoryNestedInputObjectSchema as ChannelUpdateManyWithoutCategoryNestedInputObjectSchema } from './ChannelUpdateManyWithoutCategoryNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  position: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  server: z.lazy(() => ServerUpdateOneRequiredWithoutCategoriesNestedInputObjectSchema).optional(),
  channels: z.lazy(() => ChannelUpdateManyWithoutCategoryNestedInputObjectSchema).optional()
}).strict();
export const ChannelCategoryUpdateInputObjectSchema: z.ZodType<Prisma.ChannelCategoryUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.ChannelCategoryUpdateInput>;
export const ChannelCategoryUpdateInputObjectZodSchema = makeSchema();
