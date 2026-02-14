import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { AuditLogIncludeObjectSchema as AuditLogIncludeObjectSchema } from './objects/AuditLogInclude.schema';
import { AuditLogOrderByWithRelationInputObjectSchema as AuditLogOrderByWithRelationInputObjectSchema } from './objects/AuditLogOrderByWithRelationInput.schema';
import { AuditLogWhereInputObjectSchema as AuditLogWhereInputObjectSchema } from './objects/AuditLogWhereInput.schema';
import { AuditLogWhereUniqueInputObjectSchema as AuditLogWhereUniqueInputObjectSchema } from './objects/AuditLogWhereUniqueInput.schema';
import { AuditLogScalarFieldEnumSchema } from './enums/AuditLogScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const AuditLogFindFirstOrThrowSelectSchema: z.ZodType<Prisma.AuditLogSelect> = z.object({
    id: z.boolean().optional(),
    action: z.boolean().optional(),
    serverId: z.boolean().optional(),
    server: z.boolean().optional(),
    userId: z.boolean().optional(),
    targetId: z.boolean().optional(),
    metadata: z.boolean().optional(),
    createdAt: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.AuditLogSelect>;

export const AuditLogFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    action: z.boolean().optional(),
    serverId: z.boolean().optional(),
    server: z.boolean().optional(),
    userId: z.boolean().optional(),
    targetId: z.boolean().optional(),
    metadata: z.boolean().optional(),
    createdAt: z.boolean().optional()
  }).strict();

export const AuditLogFindFirstOrThrowSchema: z.ZodType<Prisma.AuditLogFindFirstOrThrowArgs> = z.object({ select: AuditLogFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => AuditLogIncludeObjectSchema.optional()), orderBy: z.union([AuditLogOrderByWithRelationInputObjectSchema, AuditLogOrderByWithRelationInputObjectSchema.array()]).optional(), where: AuditLogWhereInputObjectSchema.optional(), cursor: AuditLogWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([AuditLogScalarFieldEnumSchema, AuditLogScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.AuditLogFindFirstOrThrowArgs>;

export const AuditLogFindFirstOrThrowZodSchema = z.object({ select: AuditLogFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => AuditLogIncludeObjectSchema.optional()), orderBy: z.union([AuditLogOrderByWithRelationInputObjectSchema, AuditLogOrderByWithRelationInputObjectSchema.array()]).optional(), where: AuditLogWhereInputObjectSchema.optional(), cursor: AuditLogWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([AuditLogScalarFieldEnumSchema, AuditLogScalarFieldEnumSchema.array()]).optional() }).strict();