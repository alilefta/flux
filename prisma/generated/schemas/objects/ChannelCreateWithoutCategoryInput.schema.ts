import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ChannelTypeSchema } from '../enums/ChannelType.schema';
import { ProfileCreateNestedOneWithoutChannelsInputObjectSchema as ProfileCreateNestedOneWithoutChannelsInputObjectSchema } from './ProfileCreateNestedOneWithoutChannelsInput.schema';
import { ServerCreateNestedOneWithoutChannelsInputObjectSchema as ServerCreateNestedOneWithoutChannelsInputObjectSchema } from './ServerCreateNestedOneWithoutChannelsInput.schema';
import { MessageCreateNestedManyWithoutChannelInputObjectSchema as MessageCreateNestedManyWithoutChannelInputObjectSchema } from './MessageCreateNestedManyWithoutChannelInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  type: ChannelTypeSchema.optional(),
  topic: z.string().optional().nullable(),
  position: z.number().int().optional(),
  isDefault: z.boolean().optional(),
  isLocked: z.boolean().optional(),
  slowModeRate: z.number().int().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  profile: z.lazy(() => ProfileCreateNestedOneWithoutChannelsInputObjectSchema),
  server: z.lazy(() => ServerCreateNestedOneWithoutChannelsInputObjectSchema),
  messages: z.lazy(() => MessageCreateNestedManyWithoutChannelInputObjectSchema).optional()
}).strict();
export const ChannelCreateWithoutCategoryInputObjectSchema: z.ZodType<Prisma.ChannelCreateWithoutCategoryInput> = makeSchema() as unknown as z.ZodType<Prisma.ChannelCreateWithoutCategoryInput>;
export const ChannelCreateWithoutCategoryInputObjectZodSchema = makeSchema();
