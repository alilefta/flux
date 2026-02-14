import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MemberProfileIdServerIdCompoundUniqueInputObjectSchema as MemberProfileIdServerIdCompoundUniqueInputObjectSchema } from './MemberProfileIdServerIdCompoundUniqueInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  profileId_serverId: z.lazy(() => MemberProfileIdServerIdCompoundUniqueInputObjectSchema).optional()
}).strict();
export const MemberWhereUniqueInputObjectSchema: z.ZodType<Prisma.MemberWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.MemberWhereUniqueInput>;
export const MemberWhereUniqueInputObjectZodSchema = makeSchema();
