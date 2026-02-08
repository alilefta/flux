import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MemberWhereInputObjectSchema as MemberWhereInputObjectSchema } from './MemberWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => MemberWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => MemberWhereInputObjectSchema).optional()
}).strict();
export const MemberScalarRelationFilterObjectSchema: z.ZodType<Prisma.MemberScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.MemberScalarRelationFilter>;
export const MemberScalarRelationFilterObjectZodSchema = makeSchema();
