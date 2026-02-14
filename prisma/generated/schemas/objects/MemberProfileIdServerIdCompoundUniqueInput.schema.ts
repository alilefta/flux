import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  profileId: z.string(),
  serverId: z.string()
}).strict();
export const MemberProfileIdServerIdCompoundUniqueInputObjectSchema: z.ZodType<Prisma.MemberProfileIdServerIdCompoundUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.MemberProfileIdServerIdCompoundUniqueInput>;
export const MemberProfileIdServerIdCompoundUniqueInputObjectZodSchema = makeSchema();
