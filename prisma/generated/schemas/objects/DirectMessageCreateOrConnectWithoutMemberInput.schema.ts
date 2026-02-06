import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { DirectMessageWhereUniqueInputObjectSchema as DirectMessageWhereUniqueInputObjectSchema } from './DirectMessageWhereUniqueInput.schema';
import { DirectMessageCreateWithoutMemberInputObjectSchema as DirectMessageCreateWithoutMemberInputObjectSchema } from './DirectMessageCreateWithoutMemberInput.schema';
import { DirectMessageUncheckedCreateWithoutMemberInputObjectSchema as DirectMessageUncheckedCreateWithoutMemberInputObjectSchema } from './DirectMessageUncheckedCreateWithoutMemberInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DirectMessageWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => DirectMessageCreateWithoutMemberInputObjectSchema), z.lazy(() => DirectMessageUncheckedCreateWithoutMemberInputObjectSchema)])
}).strict();
export const DirectMessageCreateOrConnectWithoutMemberInputObjectSchema: z.ZodType<Prisma.DirectMessageCreateOrConnectWithoutMemberInput> = makeSchema() as unknown as z.ZodType<Prisma.DirectMessageCreateOrConnectWithoutMemberInput>;
export const DirectMessageCreateOrConnectWithoutMemberInputObjectZodSchema = makeSchema();
