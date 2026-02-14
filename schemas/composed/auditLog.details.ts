import z from "zod";
import { ServerBaseSchema } from "../server.base";
import { AuditLogModelSchema } from "@/prisma/generated/schemas";

export const AuditLogDetailsDTOSchema = AuditLogModelSchema.extend({
	server: ServerBaseSchema,
	metadata: z.json(),
});

export type AuditLogDetailsDTO = z.infer<typeof AuditLogDetailsDTOSchema>;
