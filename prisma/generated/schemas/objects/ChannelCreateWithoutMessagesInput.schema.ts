import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ChannelTypeSchema } from '../enums/ChannelType.schema';
import { ProfileCreateNestedOneWithoutChannelsInputObjectSchema as ProfileCreateNestedOneWithoutChannelsInputObjectSchema } from './ProfileCreateNestedOneWithoutChannelsInput.schema';
import { ServerCreateNestedOneWithoutChannelsInputObjectSchema as ServerCreateNestedOneWithoutChannelsInputObjectSchema } from './ServerCreateNestedOneWithoutChannelsInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  type: ChannelTypeSchema.optional(),
  isDefault: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  profile: z.lazy(() => ProfileCreateNestedOneWithoutChannelsInputObjectSchema),
  server: z.lazy(() => ServerCreateNestedOneWithoutChannelsInputObjectSchema)
}).strict();
export const ChannelCreateWithoutMessagesInputObjectSchema: z.ZodType<Prisma.ChannelCreateWithoutMessagesInput> = makeSchema() as unknown as z.ZodType<Prisma.ChannelCreateWithoutMessagesInput>;
export const ChannelCreateWithoutMessagesInputObjectZodSchema = makeSchema();
