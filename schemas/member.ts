import z from "zod";

const memberRoleSchema = z.enum(["ADMIN", "MODERATOR", "GUEST"]);

export const MemberSchema = z.object({
	id: z.string(),
	role: memberRoleSchema,

	createdAt: z.union([z.string(), z.date()]).optional(),
	updatedAt: z.union([z.string(), z.date()]).optional(),
	serverId: z.string(),
	profileId: z.string(),
});

export type Member = z.infer<typeof MemberSchema>;

export const CreateMemberSchema = z.object({
	profileId: z.string(),
	role: memberRoleSchema,
});
