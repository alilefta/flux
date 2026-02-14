import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { AuditLogWhereUniqueInputObjectSchema as AuditLogWhereUniqueInputObjectSchema } from './AuditLogWhereUniqueInput.schema';
import { AuditLogCreateWithoutServerInputObjectSchema as AuditLogCreateWithoutServerInputObjectSchema } from './AuditLogCreateWithoutServerInput.schema';
import { AuditLogUncheckedCreateWithoutServerInputObjectSchema as AuditLogUncheckedCreateWithoutServerInputObjectSchema } from './AuditLogUncheckedCreateWithoutServerInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AuditLogWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => AuditLogCreateWithoutServerInputObjectSchema), z.lazy(() => AuditLogUncheckedCreateWithoutServerInputObjectSchema)])
}).strict();
export const AuditLogCreateOrConnectWithoutServerInputObjectSchema: z.ZodType<Prisma.AuditLogCreateOrConnectWithoutServerInput> = makeSchema() as unknown as z.ZodType<Prisma.AuditLogCreateOrConnectWithoutServerInput>;
export const AuditLogCreateOrConnectWithoutServerInputObjectZodSchema = makeSchema();
