import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ConversationMemberOneIdMemberTwoIdCompoundUniqueInputObjectSchema as ConversationMemberOneIdMemberTwoIdCompoundUniqueInputObjectSchema } from './ConversationMemberOneIdMemberTwoIdCompoundUniqueInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  memberOneId_memberTwoId: z.lazy(() => ConversationMemberOneIdMemberTwoIdCompoundUniqueInputObjectSchema).optional()
}).strict();
export const ConversationWhereUniqueInputObjectSchema: z.ZodType<Prisma.ConversationWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.ConversationWhereUniqueInput>;
export const ConversationWhereUniqueInputObjectZodSchema = makeSchema();
