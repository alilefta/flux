import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { DirectMessageWhereUniqueInputObjectSchema as DirectMessageWhereUniqueInputObjectSchema } from './DirectMessageWhereUniqueInput.schema';
import { DirectMessageUpdateWithoutMemberInputObjectSchema as DirectMessageUpdateWithoutMemberInputObjectSchema } from './DirectMessageUpdateWithoutMemberInput.schema';
import { DirectMessageUncheckedUpdateWithoutMemberInputObjectSchema as DirectMessageUncheckedUpdateWithoutMemberInputObjectSchema } from './DirectMessageUncheckedUpdateWithoutMemberInput.schema';
import { DirectMessageCreateWithoutMemberInputObjectSchema as DirectMessageCreateWithoutMemberInputObjectSchema } from './DirectMessageCreateWithoutMemberInput.schema';
import { DirectMessageUncheckedCreateWithoutMemberInputObjectSchema as DirectMessageUncheckedCreateWithoutMemberInputObjectSchema } from './DirectMessageUncheckedCreateWithoutMemberInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DirectMessageWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => DirectMessageUpdateWithoutMemberInputObjectSchema), z.lazy(() => DirectMessageUncheckedUpdateWithoutMemberInputObjectSchema)]),
  create: z.union([z.lazy(() => DirectMessageCreateWithoutMemberInputObjectSchema), z.lazy(() => DirectMessageUncheckedCreateWithoutMemberInputObjectSchema)])
}).strict();
export const DirectMessageUpsertWithWhereUniqueWithoutMemberInputObjectSchema: z.ZodType<Prisma.DirectMessageUpsertWithWhereUniqueWithoutMemberInput> = makeSchema() as unknown as z.ZodType<Prisma.DirectMessageUpsertWithWhereUniqueWithoutMemberInput>;
export const DirectMessageUpsertWithWhereUniqueWithoutMemberInputObjectZodSchema = makeSchema();
