import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { AuditLogCreateWithoutServerInputObjectSchema as AuditLogCreateWithoutServerInputObjectSchema } from './AuditLogCreateWithoutServerInput.schema';
import { AuditLogUncheckedCreateWithoutServerInputObjectSchema as AuditLogUncheckedCreateWithoutServerInputObjectSchema } from './AuditLogUncheckedCreateWithoutServerInput.schema';
import { AuditLogCreateOrConnectWithoutServerInputObjectSchema as AuditLogCreateOrConnectWithoutServerInputObjectSchema } from './AuditLogCreateOrConnectWithoutServerInput.schema';
import { AuditLogCreateManyServerInputEnvelopeObjectSchema as AuditLogCreateManyServerInputEnvelopeObjectSchema } from './AuditLogCreateManyServerInputEnvelope.schema';
import { AuditLogWhereUniqueInputObjectSchema as AuditLogWhereUniqueInputObjectSchema } from './AuditLogWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AuditLogCreateWithoutServerInputObjectSchema), z.lazy(() => AuditLogCreateWithoutServerInputObjectSchema).array(), z.lazy(() => AuditLogUncheckedCreateWithoutServerInputObjectSchema), z.lazy(() => AuditLogUncheckedCreateWithoutServerInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => AuditLogCreateOrConnectWithoutServerInputObjectSchema), z.lazy(() => AuditLogCreateOrConnectWithoutServerInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => AuditLogCreateManyServerInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => AuditLogWhereUniqueInputObjectSchema), z.lazy(() => AuditLogWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const AuditLogCreateNestedManyWithoutServerInputObjectSchema: z.ZodType<Prisma.AuditLogCreateNestedManyWithoutServerInput> = makeSchema() as unknown as z.ZodType<Prisma.AuditLogCreateNestedManyWithoutServerInput>;
export const AuditLogCreateNestedManyWithoutServerInputObjectZodSchema = makeSchema();
