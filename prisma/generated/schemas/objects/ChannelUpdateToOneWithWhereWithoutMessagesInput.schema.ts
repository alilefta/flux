import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ChannelWhereInputObjectSchema as ChannelWhereInputObjectSchema } from './ChannelWhereInput.schema';
import { ChannelUpdateWithoutMessagesInputObjectSchema as ChannelUpdateWithoutMessagesInputObjectSchema } from './ChannelUpdateWithoutMessagesInput.schema';
import { ChannelUncheckedUpdateWithoutMessagesInputObjectSchema as ChannelUncheckedUpdateWithoutMessagesInputObjectSchema } from './ChannelUncheckedUpdateWithoutMessagesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ChannelWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ChannelUpdateWithoutMessagesInputObjectSchema), z.lazy(() => ChannelUncheckedUpdateWithoutMessagesInputObjectSchema)])
}).strict();
export const ChannelUpdateToOneWithWhereWithoutMessagesInputObjectSchema: z.ZodType<Prisma.ChannelUpdateToOneWithWhereWithoutMessagesInput> = makeSchema() as unknown as z.ZodType<Prisma.ChannelUpdateToOneWithWhereWithoutMessagesInput>;
export const ChannelUpdateToOneWithWhereWithoutMessagesInputObjectZodSchema = makeSchema();
