import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MemberCreateWithoutMessagesInputObjectSchema as MemberCreateWithoutMessagesInputObjectSchema } from './MemberCreateWithoutMessagesInput.schema';
import { MemberUncheckedCreateWithoutMessagesInputObjectSchema as MemberUncheckedCreateWithoutMessagesInputObjectSchema } from './MemberUncheckedCreateWithoutMessagesInput.schema';
import { MemberCreateOrConnectWithoutMessagesInputObjectSchema as MemberCreateOrConnectWithoutMessagesInputObjectSchema } from './MemberCreateOrConnectWithoutMessagesInput.schema';
import { MemberUpsertWithoutMessagesInputObjectSchema as MemberUpsertWithoutMessagesInputObjectSchema } from './MemberUpsertWithoutMessagesInput.schema';
import { MemberWhereUniqueInputObjectSchema as MemberWhereUniqueInputObjectSchema } from './MemberWhereUniqueInput.schema';
import { MemberUpdateToOneWithWhereWithoutMessagesInputObjectSchema as MemberUpdateToOneWithWhereWithoutMessagesInputObjectSchema } from './MemberUpdateToOneWithWhereWithoutMessagesInput.schema';
import { MemberUpdateWithoutMessagesInputObjectSchema as MemberUpdateWithoutMessagesInputObjectSchema } from './MemberUpdateWithoutMessagesInput.schema';
import { MemberUncheckedUpdateWithoutMessagesInputObjectSchema as MemberUncheckedUpdateWithoutMessagesInputObjectSchema } from './MemberUncheckedUpdateWithoutMessagesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => MemberCreateWithoutMessagesInputObjectSchema), z.lazy(() => MemberUncheckedCreateWithoutMessagesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => MemberCreateOrConnectWithoutMessagesInputObjectSchema).optional(),
  upsert: z.lazy(() => MemberUpsertWithoutMessagesInputObjectSchema).optional(),
  connect: z.lazy(() => MemberWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => MemberUpdateToOneWithWhereWithoutMessagesInputObjectSchema), z.lazy(() => MemberUpdateWithoutMessagesInputObjectSchema), z.lazy(() => MemberUncheckedUpdateWithoutMessagesInputObjectSchema)]).optional()
}).strict();
export const MemberUpdateOneRequiredWithoutMessagesNestedInputObjectSchema: z.ZodType<Prisma.MemberUpdateOneRequiredWithoutMessagesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.MemberUpdateOneRequiredWithoutMessagesNestedInput>;
export const MemberUpdateOneRequiredWithoutMessagesNestedInputObjectZodSchema = makeSchema();
