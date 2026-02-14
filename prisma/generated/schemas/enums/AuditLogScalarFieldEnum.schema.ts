import * as z from 'zod';

export const AuditLogScalarFieldEnumSchema = z.enum(['id', 'action', 'serverId', 'userId', 'targetId', 'metadata', 'createdAt'])

export type AuditLogScalarFieldEnum = z.infer<typeof AuditLogScalarFieldEnumSchema>;