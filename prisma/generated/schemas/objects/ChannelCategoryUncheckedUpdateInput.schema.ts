import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { ChannelUncheckedUpdateManyWithoutCategoryNestedInputObjectSchema as ChannelUncheckedUpdateManyWithoutCategoryNestedInputObjectSchema } from './ChannelUncheckedUpdateManyWithoutCategoryNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  position: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  serverId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  channels: z.lazy(() => ChannelUncheckedUpdateManyWithoutCategoryNestedInputObjectSchema).optional()
}).strict();
export const ChannelCategoryUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.ChannelCategoryUncheckedUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.ChannelCategoryUncheckedUpdateInput>;
export const ChannelCategoryUncheckedUpdateInputObjectZodSchema = makeSchema();
