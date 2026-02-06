import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  memberOneId: z.string(),
  memberTwoId: z.string()
}).strict();
export const ConversationMemberOneIdMemberTwoIdCompoundUniqueInputObjectSchema: z.ZodType<Prisma.ConversationMemberOneIdMemberTwoIdCompoundUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.ConversationMemberOneIdMemberTwoIdCompoundUniqueInput>;
export const ConversationMemberOneIdMemberTwoIdCompoundUniqueInputObjectZodSchema = makeSchema();
