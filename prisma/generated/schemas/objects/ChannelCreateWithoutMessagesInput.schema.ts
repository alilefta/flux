import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ChannelTypeSchema } from '../enums/ChannelType.schema';
import { ProfileCreateNestedOneWithoutChannelsInputObjectSchema as ProfileCreateNestedOneWithoutChannelsInputObjectSchema } from './ProfileCreateNestedOneWithoutChannelsInput.schema';
import { ServerCreateNestedOneWithoutChannelsInputObjectSchema as ServerCreateNestedOneWithoutChannelsInputObjectSchema } from './ServerCreateNestedOneWithoutChannelsInput.schema';
import { ChannelCategoryCreateNestedOneWithoutChannelsInputObjectSchema as ChannelCategoryCreateNestedOneWithoutChannelsInputObjectSchema } from './ChannelCategoryCreateNestedOneWithoutChannelsInput.schema'

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
  category: z.lazy(() => ChannelCategoryCreateNestedOneWithoutChannelsInputObjectSchema).optional()
}).strict();
export const ChannelCreateWithoutMessagesInputObjectSchema: z.ZodType<Prisma.ChannelCreateWithoutMessagesInput> = makeSchema() as unknown as z.ZodType<Prisma.ChannelCreateWithoutMessagesInput>;
export const ChannelCreateWithoutMessagesInputObjectZodSchema = makeSchema();
