import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { ProfileUpdateOneRequiredWithoutServersNestedInputObjectSchema as ProfileUpdateOneRequiredWithoutServersNestedInputObjectSchema } from './ProfileUpdateOneRequiredWithoutServersNestedInput.schema';
import { ChannelUpdateManyWithoutServerNestedInputObjectSchema as ChannelUpdateManyWithoutServerNestedInputObjectSchema } from './ChannelUpdateManyWithoutServerNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  imageUrl: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  inviteCode: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  memberCount: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  profile: z.lazy(() => ProfileUpdateOneRequiredWithoutServersNestedInputObjectSchema).optional(),
  channels: z.lazy(() => ChannelUpdateManyWithoutServerNestedInputObjectSchema).optional()
}).strict();
export const ServerUpdateWithoutMembersInputObjectSchema: z.ZodType<Prisma.ServerUpdateWithoutMembersInput> = makeSchema() as unknown as z.ZodType<Prisma.ServerUpdateWithoutMembersInput>;
export const ServerUpdateWithoutMembersInputObjectZodSchema = makeSchema();
