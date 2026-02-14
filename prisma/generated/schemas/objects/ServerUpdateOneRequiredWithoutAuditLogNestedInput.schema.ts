import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ServerCreateWithoutAuditLogInputObjectSchema as ServerCreateWithoutAuditLogInputObjectSchema } from './ServerCreateWithoutAuditLogInput.schema';
import { ServerUncheckedCreateWithoutAuditLogInputObjectSchema as ServerUncheckedCreateWithoutAuditLogInputObjectSchema } from './ServerUncheckedCreateWithoutAuditLogInput.schema';
import { ServerCreateOrConnectWithoutAuditLogInputObjectSchema as ServerCreateOrConnectWithoutAuditLogInputObjectSchema } from './ServerCreateOrConnectWithoutAuditLogInput.schema';
import { ServerUpsertWithoutAuditLogInputObjectSchema as ServerUpsertWithoutAuditLogInputObjectSchema } from './ServerUpsertWithoutAuditLogInput.schema';
import { ServerWhereUniqueInputObjectSchema as ServerWhereUniqueInputObjectSchema } from './ServerWhereUniqueInput.schema';
import { ServerUpdateToOneWithWhereWithoutAuditLogInputObjectSchema as ServerUpdateToOneWithWhereWithoutAuditLogInputObjectSchema } from './ServerUpdateToOneWithWhereWithoutAuditLogInput.schema';
import { ServerUpdateWithoutAuditLogInputObjectSchema as ServerUpdateWithoutAuditLogInputObjectSchema } from './ServerUpdateWithoutAuditLogInput.schema';
import { ServerUncheckedUpdateWithoutAuditLogInputObjectSchema as ServerUncheckedUpdateWithoutAuditLogInputObjectSchema } from './ServerUncheckedUpdateWithoutAuditLogInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ServerCreateWithoutAuditLogInputObjectSchema), z.lazy(() => ServerUncheckedCreateWithoutAuditLogInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ServerCreateOrConnectWithoutAuditLogInputObjectSchema).optional(),
  upsert: z.lazy(() => ServerUpsertWithoutAuditLogInputObjectSchema).optional(),
  connect: z.lazy(() => ServerWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ServerUpdateToOneWithWhereWithoutAuditLogInputObjectSchema), z.lazy(() => ServerUpdateWithoutAuditLogInputObjectSchema), z.lazy(() => ServerUncheckedUpdateWithoutAuditLogInputObjectSchema)]).optional()
}).strict();
export const ServerUpdateOneRequiredWithoutAuditLogNestedInputObjectSchema: z.ZodType<Prisma.ServerUpdateOneRequiredWithoutAuditLogNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ServerUpdateOneRequiredWithoutAuditLogNestedInput>;
export const ServerUpdateOneRequiredWithoutAuditLogNestedInputObjectZodSchema = makeSchema();
