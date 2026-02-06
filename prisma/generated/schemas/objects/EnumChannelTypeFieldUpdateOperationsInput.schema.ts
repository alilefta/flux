import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ChannelTypeSchema } from '../enums/ChannelType.schema'

const makeSchema = () => z.object({
  set: ChannelTypeSchema.optional()
}).strict();
export const EnumChannelTypeFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumChannelTypeFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.EnumChannelTypeFieldUpdateOperationsInput>;
export const EnumChannelTypeFieldUpdateOperationsInputObjectZodSchema = makeSchema();
