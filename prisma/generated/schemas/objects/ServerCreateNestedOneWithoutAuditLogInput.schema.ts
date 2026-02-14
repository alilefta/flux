import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ServerCreateWithoutAuditLogInputObjectSchema as ServerCreateWithoutAuditLogInputObjectSchema } from './ServerCreateWithoutAuditLogInput.schema';
import { ServerUncheckedCreateWithoutAuditLogInputObjectSchema as ServerUncheckedCreateWithoutAuditLogInputObjectSchema } from './ServerUncheckedCreateWithoutAuditLogInput.schema';
import { ServerCreateOrConnectWithoutAuditLogInputObjectSchema as ServerCreateOrConnectWithoutAuditLogInputObjectSchema } from './ServerCreateOrConnectWithoutAuditLogInput.schema';
import { ServerWhereUniqueInputObjectSchema as ServerWhereUniqueInputObjectSchema } from './ServerWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ServerCreateWithoutAuditLogInputObjectSchema), z.lazy(() => ServerUncheckedCreateWithoutAuditLogInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ServerCreateOrConnectWithoutAuditLogInputObjectSchema).optional(),
  connect: z.lazy(() => ServerWhereUniqueInputObjectSchema).optional()
}).strict();
export const ServerCreateNestedOneWithoutAuditLogInputObjectSchema: z.ZodType<Prisma.ServerCreateNestedOneWithoutAuditLogInput> = makeSchema() as unknown as z.ZodType<Prisma.ServerCreateNestedOneWithoutAuditLogInput>;
export const ServerCreateNestedOneWithoutAuditLogInputObjectZodSchema = makeSchema();
