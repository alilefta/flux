import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ServerWhereInputObjectSchema as ServerWhereInputObjectSchema } from './ServerWhereInput.schema';
import { ServerUpdateWithoutAuditLogInputObjectSchema as ServerUpdateWithoutAuditLogInputObjectSchema } from './ServerUpdateWithoutAuditLogInput.schema';
import { ServerUncheckedUpdateWithoutAuditLogInputObjectSchema as ServerUncheckedUpdateWithoutAuditLogInputObjectSchema } from './ServerUncheckedUpdateWithoutAuditLogInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ServerWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ServerUpdateWithoutAuditLogInputObjectSchema), z.lazy(() => ServerUncheckedUpdateWithoutAuditLogInputObjectSchema)])
}).strict();
export const ServerUpdateToOneWithWhereWithoutAuditLogInputObjectSchema: z.ZodType<Prisma.ServerUpdateToOneWithWhereWithoutAuditLogInput> = makeSchema() as unknown as z.ZodType<Prisma.ServerUpdateToOneWithWhereWithoutAuditLogInput>;
export const ServerUpdateToOneWithWhereWithoutAuditLogInputObjectZodSchema = makeSchema();
