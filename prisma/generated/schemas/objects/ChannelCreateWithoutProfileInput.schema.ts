import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ChannelTypeSchema } from '../enums/ChannelType.schema';
import { ServerCreateNestedOneWithoutChannelsInputObjectSchema as ServerCreateNestedOneWithoutChannelsInputObjectSchema } from './ServerCreateNestedOneWithoutChannelsInput.schema';
import { MessageCreateNestedManyWithoutChannelInputObjectSchema as MessageCreateNestedManyWithoutChannelInputObjectSchema } from './MessageCreateNestedManyWithoutChannelInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  type: ChannelTypeSchema.optional(),
  isDefault: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  server: z.lazy(() => ServerCreateNestedOneWithoutChannelsInputObjectSchema),
  messages: z.lazy(() => MessageCreateNestedManyWithoutChannelInputObjectSchema).optional()
}).strict();
export const ChannelCreateWithoutProfileInputObjectSchema: z.ZodType<Prisma.ChannelCreateWithoutProfileInput> = makeSchema() as unknown as z.ZodType<Prisma.ChannelCreateWithoutProfileInput>;
export const ChannelCreateWithoutProfileInputObjectZodSchema = makeSchema();
