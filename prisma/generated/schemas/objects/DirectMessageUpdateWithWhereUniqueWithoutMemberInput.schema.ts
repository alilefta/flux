import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { DirectMessageWhereUniqueInputObjectSchema as DirectMessageWhereUniqueInputObjectSchema } from './DirectMessageWhereUniqueInput.schema';
import { DirectMessageUpdateWithoutMemberInputObjectSchema as DirectMessageUpdateWithoutMemberInputObjectSchema } from './DirectMessageUpdateWithoutMemberInput.schema';
import { DirectMessageUncheckedUpdateWithoutMemberInputObjectSchema as DirectMessageUncheckedUpdateWithoutMemberInputObjectSchema } from './DirectMessageUncheckedUpdateWithoutMemberInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DirectMessageWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => DirectMessageUpdateWithoutMemberInputObjectSchema), z.lazy(() => DirectMessageUncheckedUpdateWithoutMemberInputObjectSchema)])
}).strict();
export const DirectMessageUpdateWithWhereUniqueWithoutMemberInputObjectSchema: z.ZodType<Prisma.DirectMessageUpdateWithWhereUniqueWithoutMemberInput> = makeSchema() as unknown as z.ZodType<Prisma.DirectMessageUpdateWithWhereUniqueWithoutMemberInput>;
export const DirectMessageUpdateWithWhereUniqueWithoutMemberInputObjectZodSchema = makeSchema();
