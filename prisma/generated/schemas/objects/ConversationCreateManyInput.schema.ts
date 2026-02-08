import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  memberOneId: z.string(),
  memberTwoId: z.string()
}).strict();
export const ConversationCreateManyInputObjectSchema: z.ZodType<Prisma.ConversationCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.ConversationCreateManyInput>;
export const ConversationCreateManyInputObjectZodSchema = makeSchema();
