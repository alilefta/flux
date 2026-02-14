import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ChannelTypeSchema } from '../enums/ChannelType.schema';
import { ProfileCreateNestedOneWithoutChannelsInputObjectSchema as ProfileCreateNestedOneWithoutChannelsInputObjectSchema } from './ProfileCreateNestedOneWithoutChannelsInput.schema';
import { ServerCreateNestedOneWithoutChannelsInputObjectSchema as ServerCreateNestedOneWithoutChannelsInputObjectSchema } from './ServerCreateNestedOneWithoutChannelsInput.schema';
import { ChannelCategoryCreateNestedOneWithoutChannelsInputObjectSchema as ChannelCategoryCreateNestedOneWithoutChannelsInputObjectSchema } from './ChannelCategoryCreateNestedOneWithoutChannelsInput.schema';
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
  profile: z.lazy(() => ProfileCreateNestedOneWithoutChannelsInputObjectSchema),
  server: z.lazy(() => ServerCreateNestedOneWithoutChannelsInputObjectSchema),
  category: z.lazy(() => ChannelCategoryCreateNestedOneWithoutChannelsInputObjectSchema).optional(),
  messages: z.lazy(() => MessageCreateNestedManyWithoutChannelInputObjectSchema).optional()
}).strict();
export const ChannelCreateInputObjectSchema: z.ZodType<Prisma.ChannelCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ChannelCreateInput>;
export const ChannelCreateInputObjectZodSchema = makeSchema();
