import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { ChannelTypeSchema } from '../enums/ChannelType.schema';
import { EnumChannelTypeFieldUpdateOperationsInputObjectSchema as EnumChannelTypeFieldUpdateOperationsInputObjectSchema } from './EnumChannelTypeFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { NullableIntFieldUpdateOperationsInputObjectSchema as NullableIntFieldUpdateOperationsInputObjectSchema } from './NullableIntFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { ProfileUpdateOneRequiredWithoutChannelsNestedInputObjectSchema as ProfileUpdateOneRequiredWithoutChannelsNestedInputObjectSchema } from './ProfileUpdateOneRequiredWithoutChannelsNestedInput.schema';
import { ServerUpdateOneRequiredWithoutChannelsNestedInputObjectSchema as ServerUpdateOneRequiredWithoutChannelsNestedInputObjectSchema } from './ServerUpdateOneRequiredWithoutChannelsNestedInput.schema';
import { ChannelCategoryUpdateOneWithoutChannelsNestedInputObjectSchema as ChannelCategoryUpdateOneWithoutChannelsNestedInputObjectSchema } from './ChannelCategoryUpdateOneWithoutChannelsNestedInput.schema';
import { MessageUpdateManyWithoutChannelNestedInputObjectSchema as MessageUpdateManyWithoutChannelNestedInputObjectSchema } from './MessageUpdateManyWithoutChannelNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  type: z.union([ChannelTypeSchema, z.lazy(() => EnumChannelTypeFieldUpdateOperationsInputObjectSchema)]).optional(),
  topic: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  position: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  isDefault: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  isLocked: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  slowModeRate: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  profile: z.lazy(() => ProfileUpdateOneRequiredWithoutChannelsNestedInputObjectSchema).optional(),
  server: z.lazy(() => ServerUpdateOneRequiredWithoutChannelsNestedInputObjectSchema).optional(),
  category: z.lazy(() => ChannelCategoryUpdateOneWithoutChannelsNestedInputObjectSchema).optional(),
  messages: z.lazy(() => MessageUpdateManyWithoutChannelNestedInputObjectSchema).optional()
}).strict();
export const ChannelUpdateInputObjectSchema: z.ZodType<Prisma.ChannelUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.ChannelUpdateInput>;
export const ChannelUpdateInputObjectZodSchema = makeSchema();
