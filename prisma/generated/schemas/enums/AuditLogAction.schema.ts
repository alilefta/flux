import * as z from 'zod';

export const AuditLogActionSchema = z.enum(['CHANNEL_CREATE', 'CHANNEL_DELETE', 'CHANNEL_UPDATE', 'MEMBER_KICK', 'MEMBER_BAN', 'MEMBER_ROLE_UPDATE', 'MESSAGE_DELETE', 'SERVER_UPDATE'])

export type AuditLogAction = z.infer<typeof AuditLogActionSchema>;