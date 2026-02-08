import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ChannelCreateWithoutMessagesInputObjectSchema as ChannelCreateWithoutMessagesInputObjectSchema } from './ChannelCreateWithoutMessagesInput.schema';
import { ChannelUncheckedCreateWithoutMessagesInputObjectSchema as ChannelUncheckedCreateWithoutMessagesInputObjectSchema } from './ChannelUncheckedCreateWithoutMessagesInput.schema';
import { ChannelCreateOrConnectWithoutMessagesInputObjectSchema as ChannelCreateOrConnectWithoutMessagesInputObjectSchema } from './ChannelCreateOrConnectWithoutMessagesInput.schema';
import { ChannelUpsertWithoutMessagesInputObjectSchema as ChannelUpsertWithoutMessagesInputObjectSchema } from './ChannelUpsertWithoutMessagesInput.schema';
import { ChannelWhereUniqueInputObjectSchema as ChannelWhereUniqueInputObjectSchema } from './ChannelWhereUniqueInput.schema';
import { ChannelUpdateToOneWithWhereWithoutMessagesInputObjectSchema as ChannelUpdateToOneWithWhereWithoutMessagesInputObjectSchema } from './ChannelUpdateToOneWithWhereWithoutMessagesInput.schema';
import { ChannelUpdateWithoutMessagesInputObjectSchema as ChannelUpdateWithoutMessagesInputObjectSchema } from './ChannelUpdateWithoutMessagesInput.schema';
import { ChannelUncheckedUpdateWithoutMessagesInputObjectSchema as ChannelUncheckedUpdateWithoutMessagesInputObjectSchema } from './ChannelUncheckedUpdateWithoutMessagesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ChannelCreateWithoutMessagesInputObjectSchema), z.lazy(() => ChannelUncheckedCreateWithoutMessagesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ChannelCreateOrConnectWithoutMessagesInputObjectSchema).optional(),
  upsert: z.lazy(() => ChannelUpsertWithoutMessagesInputObjectSchema).optional(),
  connect: z.lazy(() => ChannelWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ChannelUpdateToOneWithWhereWithoutMessagesInputObjectSchema), z.lazy(() => ChannelUpdateWithoutMessagesInputObjectSchema), z.lazy(() => ChannelUncheckedUpdateWithoutMessagesInputObjectSchema)]).optional()
}).strict();
export const ChannelUpdateOneRequiredWithoutMessagesNestedInputObjectSchema: z.ZodType<Prisma.ChannelUpdateOneRequiredWithoutMessagesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ChannelUpdateOneRequiredWithoutMessagesNestedInput>;
export const ChannelUpdateOneRequiredWithoutMessagesNestedInputObjectZodSchema = makeSchema();
