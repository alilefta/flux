import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ConversationCreateWithoutDirectMessagesInputObjectSchema as ConversationCreateWithoutDirectMessagesInputObjectSchema } from './ConversationCreateWithoutDirectMessagesInput.schema';
import { ConversationUncheckedCreateWithoutDirectMessagesInputObjectSchema as ConversationUncheckedCreateWithoutDirectMessagesInputObjectSchema } from './ConversationUncheckedCreateWithoutDirectMessagesInput.schema';
import { ConversationCreateOrConnectWithoutDirectMessagesInputObjectSchema as ConversationCreateOrConnectWithoutDirectMessagesInputObjectSchema } from './ConversationCreateOrConnectWithoutDirectMessagesInput.schema';
import { ConversationUpsertWithoutDirectMessagesInputObjectSchema as ConversationUpsertWithoutDirectMessagesInputObjectSchema } from './ConversationUpsertWithoutDirectMessagesInput.schema';
import { ConversationWhereUniqueInputObjectSchema as ConversationWhereUniqueInputObjectSchema } from './ConversationWhereUniqueInput.schema';
import { ConversationUpdateToOneWithWhereWithoutDirectMessagesInputObjectSchema as ConversationUpdateToOneWithWhereWithoutDirectMessagesInputObjectSchema } from './ConversationUpdateToOneWithWhereWithoutDirectMessagesInput.schema';
import { ConversationUpdateWithoutDirectMessagesInputObjectSchema as ConversationUpdateWithoutDirectMessagesInputObjectSchema } from './ConversationUpdateWithoutDirectMessagesInput.schema';
import { ConversationUncheckedUpdateWithoutDirectMessagesInputObjectSchema as ConversationUncheckedUpdateWithoutDirectMessagesInputObjectSchema } from './ConversationUncheckedUpdateWithoutDirectMessagesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ConversationCreateWithoutDirectMessagesInputObjectSchema), z.lazy(() => ConversationUncheckedCreateWithoutDirectMessagesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ConversationCreateOrConnectWithoutDirectMessagesInputObjectSchema).optional(),
  upsert: z.lazy(() => ConversationUpsertWithoutDirectMessagesInputObjectSchema).optional(),
  connect: z.lazy(() => ConversationWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ConversationUpdateToOneWithWhereWithoutDirectMessagesInputObjectSchema), z.lazy(() => ConversationUpdateWithoutDirectMessagesInputObjectSchema), z.lazy(() => ConversationUncheckedUpdateWithoutDirectMessagesInputObjectSchema)]).optional()
}).strict();
export const ConversationUpdateOneRequiredWithoutDirectMessagesNestedInputObjectSchema: z.ZodType<Prisma.ConversationUpdateOneRequiredWithoutDirectMessagesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ConversationUpdateOneRequiredWithoutDirectMessagesNestedInput>;
export const ConversationUpdateOneRequiredWithoutDirectMessagesNestedInputObjectZodSchema = makeSchema();
