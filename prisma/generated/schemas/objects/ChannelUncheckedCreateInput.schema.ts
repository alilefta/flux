import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ChannelTypeSchema } from '../enums/ChannelType.schema';
import { MessageUncheckedCreateNestedManyWithoutChannelInputObjectSchema as MessageUncheckedCreateNestedManyWithoutChannelInputObjectSchema } from './MessageUncheckedCreateNestedManyWithoutChannelInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  type: ChannelTypeSchema.optional(),
  profileId: z.string(),
  serverId: z.string(),
  isDefault: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  messages: z.lazy(() => MessageUncheckedCreateNestedManyWithoutChannelInputObjectSchema).optional()
}).strict();
export const ChannelUncheckedCreateInputObjectSchema: z.ZodType<Prisma.ChannelUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ChannelUncheckedCreateInput>;
export const ChannelUncheckedCreateInputObjectZodSchema = makeSchema();
