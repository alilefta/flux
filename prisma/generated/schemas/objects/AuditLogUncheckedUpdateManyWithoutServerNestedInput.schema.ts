import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { AuditLogCreateWithoutServerInputObjectSchema as AuditLogCreateWithoutServerInputObjectSchema } from './AuditLogCreateWithoutServerInput.schema';
import { AuditLogUncheckedCreateWithoutServerInputObjectSchema as AuditLogUncheckedCreateWithoutServerInputObjectSchema } from './AuditLogUncheckedCreateWithoutServerInput.schema';
import { AuditLogCreateOrConnectWithoutServerInputObjectSchema as AuditLogCreateOrConnectWithoutServerInputObjectSchema } from './AuditLogCreateOrConnectWithoutServerInput.schema';
import { AuditLogUpsertWithWhereUniqueWithoutServerInputObjectSchema as AuditLogUpsertWithWhereUniqueWithoutServerInputObjectSchema } from './AuditLogUpsertWithWhereUniqueWithoutServerInput.schema';
import { AuditLogCreateManyServerInputEnvelopeObjectSchema as AuditLogCreateManyServerInputEnvelopeObjectSchema } from './AuditLogCreateManyServerInputEnvelope.schema';
import { AuditLogWhereUniqueInputObjectSchema as AuditLogWhereUniqueInputObjectSchema } from './AuditLogWhereUniqueInput.schema';
import { AuditLogUpdateWithWhereUniqueWithoutServerInputObjectSchema as AuditLogUpdateWithWhereUniqueWithoutServerInputObjectSchema } from './AuditLogUpdateWithWhereUniqueWithoutServerInput.schema';
import { AuditLogUpdateManyWithWhereWithoutServerInputObjectSchema as AuditLogUpdateManyWithWhereWithoutServerInputObjectSchema } from './AuditLogUpdateManyWithWhereWithoutServerInput.schema';
import { AuditLogScalarWhereInputObjectSchema as AuditLogScalarWhereInputObjectSchema } from './AuditLogScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AuditLogCreateWithoutServerInputObjectSchema), z.lazy(() => AuditLogCreateWithoutServerInputObjectSchema).array(), z.lazy(() => AuditLogUncheckedCreateWithoutServerInputObjectSchema), z.lazy(() => AuditLogUncheckedCreateWithoutServerInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => AuditLogCreateOrConnectWithoutServerInputObjectSchema), z.lazy(() => AuditLogCreateOrConnectWithoutServerInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => AuditLogUpsertWithWhereUniqueWithoutServerInputObjectSchema), z.lazy(() => AuditLogUpsertWithWhereUniqueWithoutServerInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => AuditLogCreateManyServerInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => AuditLogWhereUniqueInputObjectSchema), z.lazy(() => AuditLogWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => AuditLogWhereUniqueInputObjectSchema), z.lazy(() => AuditLogWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => AuditLogWhereUniqueInputObjectSchema), z.lazy(() => AuditLogWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => AuditLogWhereUniqueInputObjectSchema), z.lazy(() => AuditLogWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => AuditLogUpdateWithWhereUniqueWithoutServerInputObjectSchema), z.lazy(() => AuditLogUpdateWithWhereUniqueWithoutServerInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => AuditLogUpdateManyWithWhereWithoutServerInputObjectSchema), z.lazy(() => AuditLogUpdateManyWithWhereWithoutServerInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => AuditLogScalarWhereInputObjectSchema), z.lazy(() => AuditLogScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const AuditLogUncheckedUpdateManyWithoutServerNestedInputObjectSchema: z.ZodType<Prisma.AuditLogUncheckedUpdateManyWithoutServerNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.AuditLogUncheckedUpdateManyWithoutServerNestedInput>;
export const AuditLogUncheckedUpdateManyWithoutServerNestedInputObjectZodSchema = makeSchema();
