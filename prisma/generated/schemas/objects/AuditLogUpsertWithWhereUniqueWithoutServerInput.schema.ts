import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { AuditLogWhereUniqueInputObjectSchema as AuditLogWhereUniqueInputObjectSchema } from './AuditLogWhereUniqueInput.schema';
import { AuditLogUpdateWithoutServerInputObjectSchema as AuditLogUpdateWithoutServerInputObjectSchema } from './AuditLogUpdateWithoutServerInput.schema';
import { AuditLogUncheckedUpdateWithoutServerInputObjectSchema as AuditLogUncheckedUpdateWithoutServerInputObjectSchema } from './AuditLogUncheckedUpdateWithoutServerInput.schema';
import { AuditLogCreateWithoutServerInputObjectSchema as AuditLogCreateWithoutServerInputObjectSchema } from './AuditLogCreateWithoutServerInput.schema';
import { AuditLogUncheckedCreateWithoutServerInputObjectSchema as AuditLogUncheckedCreateWithoutServerInputObjectSchema } from './AuditLogUncheckedCreateWithoutServerInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AuditLogWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => AuditLogUpdateWithoutServerInputObjectSchema), z.lazy(() => AuditLogUncheckedUpdateWithoutServerInputObjectSchema)]),
  create: z.union([z.lazy(() => AuditLogCreateWithoutServerInputObjectSchema), z.lazy(() => AuditLogUncheckedCreateWithoutServerInputObjectSchema)])
}).strict();
export const AuditLogUpsertWithWhereUniqueWithoutServerInputObjectSchema: z.ZodType<Prisma.AuditLogUpsertWithWhereUniqueWithoutServerInput> = makeSchema() as unknown as z.ZodType<Prisma.AuditLogUpsertWithWhereUniqueWithoutServerInput>;
export const AuditLogUpsertWithWhereUniqueWithoutServerInputObjectZodSchema = makeSchema();
