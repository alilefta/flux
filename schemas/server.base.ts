import z from "zod";
import { ServerModelSchema } from "@/prisma/generated/schemas";

export const ServerBaseSchema = ServerModelSchema.omit({
	profile: true,
	members: true,
	channels: true,
	auditLog: true,
	categories: true,
});

export type ServerBase = z.infer<typeof ServerBaseSchema>;
