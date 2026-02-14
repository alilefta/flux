import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ServerUpdateWithoutAuditLogInputObjectSchema as ServerUpdateWithoutAuditLogInputObjectSchema } from './ServerUpdateWithoutAuditLogInput.schema';
import { ServerUncheckedUpdateWithoutAuditLogInputObjectSchema as ServerUncheckedUpdateWithoutAuditLogInputObjectSchema } from './ServerUncheckedUpdateWithoutAuditLogInput.schema';
import { ServerCreateWithoutAuditLogInputObjectSchema as ServerCreateWithoutAuditLogInputObjectSchema } from './ServerCreateWithoutAuditLogInput.schema';
import { ServerUncheckedCreateWithoutAuditLogInputObjectSchema as ServerUncheckedCreateWithoutAuditLogInputObjectSchema } from './ServerUncheckedCreateWithoutAuditLogInput.schema';
import { ServerWhereInputObjectSchema as ServerWhereInputObjectSchema } from './ServerWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => ServerUpdateWithoutAuditLogInputObjectSchema), z.lazy(() => ServerUncheckedUpdateWithoutAuditLogInputObjectSchema)]),
  create: z.union([z.lazy(() => ServerCreateWithoutAuditLogInputObjectSchema), z.lazy(() => ServerUncheckedCreateWithoutAuditLogInputObjectSchema)]),
  where: z.lazy(() => ServerWhereInputObjectSchema).optional()
}).strict();
export const ServerUpsertWithoutAuditLogInputObjectSchema: z.ZodType<Prisma.ServerUpsertWithoutAuditLogInput> = makeSchema() as unknown as z.ZodType<Prisma.ServerUpsertWithoutAuditLogInput>;
export const ServerUpsertWithoutAuditLogInputObjectZodSchema = makeSchema();
