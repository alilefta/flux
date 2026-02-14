import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ServerCountOutputTypeCountMembersArgsObjectSchema as ServerCountOutputTypeCountMembersArgsObjectSchema } from './ServerCountOutputTypeCountMembersArgs.schema';
import { ServerCountOutputTypeCountChannelsArgsObjectSchema as ServerCountOutputTypeCountChannelsArgsObjectSchema } from './ServerCountOutputTypeCountChannelsArgs.schema';
import { ServerCountOutputTypeCountCategoriesArgsObjectSchema as ServerCountOutputTypeCountCategoriesArgsObjectSchema } from './ServerCountOutputTypeCountCategoriesArgs.schema';
import { ServerCountOutputTypeCountAuditLogArgsObjectSchema as ServerCountOutputTypeCountAuditLogArgsObjectSchema } from './ServerCountOutputTypeCountAuditLogArgs.schema'

const makeSchema = () => z.object({
  members: z.union([z.boolean(), z.lazy(() => ServerCountOutputTypeCountMembersArgsObjectSchema)]).optional(),
  channels: z.union([z.boolean(), z.lazy(() => ServerCountOutputTypeCountChannelsArgsObjectSchema)]).optional(),
  categories: z.union([z.boolean(), z.lazy(() => ServerCountOutputTypeCountCategoriesArgsObjectSchema)]).optional(),
  auditLog: z.union([z.boolean(), z.lazy(() => ServerCountOutputTypeCountAuditLogArgsObjectSchema)]).optional()
}).strict();
export const ServerCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.ServerCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.ServerCountOutputTypeSelect>;
export const ServerCountOutputTypeSelectObjectZodSchema = makeSchema();
