import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  memberTwoId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const ConversationCreateManyMemberOneInputObjectSchema: z.ZodType<Prisma.ConversationCreateManyMemberOneInput> = makeSchema() as unknown as z.ZodType<Prisma.ConversationCreateManyMemberOneInput>;
export const ConversationCreateManyMemberOneInputObjectZodSchema = makeSchema();
