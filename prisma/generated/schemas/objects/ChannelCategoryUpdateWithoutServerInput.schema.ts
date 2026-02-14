import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { ChannelUpdateManyWithoutCategoryNestedInputObjectSchema as ChannelUpdateManyWithoutCategoryNestedInputObjectSchema } from './ChannelUpdateManyWithoutCategoryNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  position: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  channels: z.lazy(() => ChannelUpdateManyWithoutCategoryNestedInputObjectSchema).optional()
}).strict();
export const ChannelCategoryUpdateWithoutServerInputObjectSchema: z.ZodType<Prisma.ChannelCategoryUpdateWithoutServerInput> = makeSchema() as unknown as z.ZodType<Prisma.ChannelCategoryUpdateWithoutServerInput>;
export const ChannelCategoryUpdateWithoutServerInputObjectZodSchema = makeSchema();
