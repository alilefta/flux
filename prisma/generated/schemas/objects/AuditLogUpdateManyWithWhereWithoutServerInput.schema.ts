import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { AuditLogScalarWhereInputObjectSchema as AuditLogScalarWhereInputObjectSchema } from './AuditLogScalarWhereInput.schema';
import { AuditLogUpdateManyMutationInputObjectSchema as AuditLogUpdateManyMutationInputObjectSchema } from './AuditLogUpdateManyMutationInput.schema';
import { AuditLogUncheckedUpdateManyWithoutServerInputObjectSchema as AuditLogUncheckedUpdateManyWithoutServerInputObjectSchema } from './AuditLogUncheckedUpdateManyWithoutServerInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AuditLogScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => AuditLogUpdateManyMutationInputObjectSchema), z.lazy(() => AuditLogUncheckedUpdateManyWithoutServerInputObjectSchema)])
}).strict();
export const AuditLogUpdateManyWithWhereWithoutServerInputObjectSchema: z.ZodType<Prisma.AuditLogUpdateManyWithWhereWithoutServerInput> = makeSchema() as unknown as z.ZodType<Prisma.AuditLogUpdateManyWithWhereWithoutServerInput>;
export const AuditLogUpdateManyWithWhereWithoutServerInputObjectZodSchema = makeSchema();
