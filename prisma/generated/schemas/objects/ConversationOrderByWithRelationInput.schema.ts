import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ProfileOrderByWithRelationInputObjectSchema as ProfileOrderByWithRelationInputObjectSchema } from './ProfileOrderByWithRelationInput.schema';
import { DirectMessageOrderByRelationAggregateInputObjectSchema as DirectMessageOrderByRelationAggregateInputObjectSchema } from './DirectMessageOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  memberOneId: SortOrderSchema.optional(),
  memberTwoId: SortOrderSchema.optional(),
  memberOne: z.lazy(() => ProfileOrderByWithRelationInputObjectSchema).optional(),
  memberTwo: z.lazy(() => ProfileOrderByWithRelationInputObjectSchema).optional(),
  directMessages: z.lazy(() => DirectMessageOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const ConversationOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.ConversationOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.ConversationOrderByWithRelationInput>;
export const ConversationOrderByWithRelationInputObjectZodSchema = makeSchema();
