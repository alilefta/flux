import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { MemberUpdateManyWithoutServerNestedInputObjectSchema as MemberUpdateManyWithoutServerNestedInputObjectSchema } from './MemberUpdateManyWithoutServerNestedInput.schema';
import { ChannelUpdateManyWithoutServerNestedInputObjectSchema as ChannelUpdateManyWithoutServerNestedInputObjectSchema } from './ChannelUpdateManyWithoutServerNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  imageUrl: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  inviteCode: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  memberCount: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  members: z.lazy(() => MemberUpdateManyWithoutServerNestedInputObjectSchema).optional(),
  channels: z.lazy(() => ChannelUpdateManyWithoutServerNestedInputObjectSchema).optional()
}).strict();
export const ServerUpdateWithoutProfileInputObjectSchema: z.ZodType<Prisma.ServerUpdateWithoutProfileInput> = makeSchema() as unknown as z.ZodType<Prisma.ServerUpdateWithoutProfileInput>;
export const ServerUpdateWithoutProfileInputObjectZodSchema = makeSchema();
