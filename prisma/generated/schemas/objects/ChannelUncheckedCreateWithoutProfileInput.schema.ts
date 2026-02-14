import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ChannelTypeSchema } from '../enums/ChannelType.schema';
import { MessageUncheckedCreateNestedManyWithoutChannelInputObjectSchema as MessageUncheckedCreateNestedManyWithoutChannelInputObjectSchema } from './MessageUncheckedCreateNestedManyWithoutChannelInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  type: ChannelTypeSchema.optional(),
  topic: z.string().optional().nullable(),
  position: z.number().int().optional(),
  serverId: z.string(),
  categoryId: z.string().optional().nullable(),
  isDefault: z.boolean().optional(),
  isLocked: z.boolean().optional(),
  slowModeRate: z.number().int().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  messages: z.lazy(() => MessageUncheckedCreateNestedManyWithoutChannelInputObjectSchema).optional()
}).strict();
export const ChannelUncheckedCreateWithoutProfileInputObjectSchema: z.ZodType<Prisma.ChannelUncheckedCreateWithoutProfileInput> = makeSchema() as unknown as z.ZodType<Prisma.ChannelUncheckedCreateWithoutProfileInput>;
export const ChannelUncheckedCreateWithoutProfileInputObjectZodSchema = makeSchema();
