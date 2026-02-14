import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ServerWhereUniqueInputObjectSchema as ServerWhereUniqueInputObjectSchema } from './ServerWhereUniqueInput.schema';
import { ServerCreateWithoutAuditLogInputObjectSchema as ServerCreateWithoutAuditLogInputObjectSchema } from './ServerCreateWithoutAuditLogInput.schema';
import { ServerUncheckedCreateWithoutAuditLogInputObjectSchema as ServerUncheckedCreateWithoutAuditLogInputObjectSchema } from './ServerUncheckedCreateWithoutAuditLogInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ServerWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ServerCreateWithoutAuditLogInputObjectSchema), z.lazy(() => ServerUncheckedCreateWithoutAuditLogInputObjectSchema)])
}).strict();
export const ServerCreateOrConnectWithoutAuditLogInputObjectSchema: z.ZodType<Prisma.ServerCreateOrConnectWithoutAuditLogInput> = makeSchema() as unknown as z.ZodType<Prisma.ServerCreateOrConnectWithoutAuditLogInput>;
export const ServerCreateOrConnectWithoutAuditLogInputObjectZodSchema = makeSchema();
