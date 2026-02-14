import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { AuditLogWhereUniqueInputObjectSchema as AuditLogWhereUniqueInputObjectSchema } from './AuditLogWhereUniqueInput.schema';
import { AuditLogUpdateWithoutServerInputObjectSchema as AuditLogUpdateWithoutServerInputObjectSchema } from './AuditLogUpdateWithoutServerInput.schema';
import { AuditLogUncheckedUpdateWithoutServerInputObjectSchema as AuditLogUncheckedUpdateWithoutServerInputObjectSchema } from './AuditLogUncheckedUpdateWithoutServerInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AuditLogWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => AuditLogUpdateWithoutServerInputObjectSchema), z.lazy(() => AuditLogUncheckedUpdateWithoutServerInputObjectSchema)])
}).strict();
export const AuditLogUpdateWithWhereUniqueWithoutServerInputObjectSchema: z.ZodType<Prisma.AuditLogUpdateWithWhereUniqueWithoutServerInput> = makeSchema() as unknown as z.ZodType<Prisma.AuditLogUpdateWithWhereUniqueWithoutServerInput>;
export const AuditLogUpdateWithWhereUniqueWithoutServerInputObjectZodSchema = makeSchema();
