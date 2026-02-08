import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ChannelTypeSchema } from '../enums/ChannelType.schema';
import { ProfileCreateNestedOneWithoutChannelsInputObjectSchema as ProfileCreateNestedOneWithoutChannelsInputObjectSchema } from './ProfileCreateNestedOneWithoutChannelsInput.schema';
import { MessageCreateNestedManyWithoutChannelInputObjectSchema as MessageCreateNestedManyWithoutChannelInputObjectSchema } from './MessageCreateNestedManyWithoutChannelInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  type: ChannelTypeSchema.optional(),
  isDefault: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  profile: z.lazy(() => ProfileCreateNestedOneWithoutChannelsInputObjectSchema),
  messages: z.lazy(() => MessageCreateNestedManyWithoutChannelInputObjectSchema).optional()
}).strict();
export const ChannelCreateWithoutServerInputObjectSchema: z.ZodType<Prisma.ChannelCreateWithoutServerInput> = makeSchema() as unknown as z.ZodType<Prisma.ChannelCreateWithoutServerInput>;
export const ChannelCreateWithoutServerInputObjectZodSchema = makeSchema();
