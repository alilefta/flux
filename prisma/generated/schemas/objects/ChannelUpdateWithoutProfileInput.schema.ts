import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { ChannelTypeSchema } from '../enums/ChannelType.schema';
import { EnumChannelTypeFieldUpdateOperationsInputObjectSchema as EnumChannelTypeFieldUpdateOperationsInputObjectSchema } from './EnumChannelTypeFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { ServerUpdateOneRequiredWithoutChannelsNestedInputObjectSchema as ServerUpdateOneRequiredWithoutChannelsNestedInputObjectSchema } from './ServerUpdateOneRequiredWithoutChannelsNestedInput.schema';
import { MessageUpdateManyWithoutChannelNestedInputObjectSchema as MessageUpdateManyWithoutChannelNestedInputObjectSchema } from './MessageUpdateManyWithoutChannelNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  type: z.union([ChannelTypeSchema, z.lazy(() => EnumChannelTypeFieldUpdateOperationsInputObjectSchema)]).optional(),
  isDefault: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  server: z.lazy(() => ServerUpdateOneRequiredWithoutChannelsNestedInputObjectSchema).optional(),
  messages: z.lazy(() => MessageUpdateManyWithoutChannelNestedInputObjectSchema).optional()
}).strict();
export const ChannelUpdateWithoutProfileInputObjectSchema: z.ZodType<Prisma.ChannelUpdateWithoutProfileInput> = makeSchema() as unknown as z.ZodType<Prisma.ChannelUpdateWithoutProfileInput>;
export const ChannelUpdateWithoutProfileInputObjectZodSchema = makeSchema();
