import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ChannelUpdateWithoutMessagesInputObjectSchema as ChannelUpdateWithoutMessagesInputObjectSchema } from './ChannelUpdateWithoutMessagesInput.schema';
import { ChannelUncheckedUpdateWithoutMessagesInputObjectSchema as ChannelUncheckedUpdateWithoutMessagesInputObjectSchema } from './ChannelUncheckedUpdateWithoutMessagesInput.schema';
import { ChannelCreateWithoutMessagesInputObjectSchema as ChannelCreateWithoutMessagesInputObjectSchema } from './ChannelCreateWithoutMessagesInput.schema';
import { ChannelUncheckedCreateWithoutMessagesInputObjectSchema as ChannelUncheckedCreateWithoutMessagesInputObjectSchema } from './ChannelUncheckedCreateWithoutMessagesInput.schema';
import { ChannelWhereInputObjectSchema as ChannelWhereInputObjectSchema } from './ChannelWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => ChannelUpdateWithoutMessagesInputObjectSchema), z.lazy(() => ChannelUncheckedUpdateWithoutMessagesInputObjectSchema)]),
  create: z.union([z.lazy(() => ChannelCreateWithoutMessagesInputObjectSchema), z.lazy(() => ChannelUncheckedCreateWithoutMessagesInputObjectSchema)]),
  where: z.lazy(() => ChannelWhereInputObjectSchema).optional()
}).strict();
export const ChannelUpsertWithoutMessagesInputObjectSchema: z.ZodType<Prisma.ChannelUpsertWithoutMessagesInput> = makeSchema() as unknown as z.ZodType<Prisma.ChannelUpsertWithoutMessagesInput>;
export const ChannelUpsertWithoutMessagesInputObjectZodSchema = makeSchema();
