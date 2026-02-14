import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  memberOneId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const ConversationCreateManyMemberTwoInputObjectSchema: z.ZodType<Prisma.ConversationCreateManyMemberTwoInput> = makeSchema() as unknown as z.ZodType<Prisma.ConversationCreateManyMemberTwoInput>;
export const ConversationCreateManyMemberTwoInputObjectZodSchema = makeSchema();
