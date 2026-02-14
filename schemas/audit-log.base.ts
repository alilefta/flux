import { AuditLogModelSchema } from "@/prisma/generated/schemas";
import z from "zod";
import { ServerBaseSchema } from "./server.base";

export const AuditLogBaseSchema = AuditLogModelSchema.omit({
	server: true,
});

export type AuditLogBase = z.infer<typeof AuditLogBaseSchema>;

export const AuditLogDetailsDTOSchema = AuditLogModelSchema.extend({
	server: ServerBaseSchema,
	metadata: z.json(),
});

export type AuditLogDetailsDTO = z.infer<typeof AuditLogDetailsDTOSchema>;
