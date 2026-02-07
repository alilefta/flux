import z from "zod";
import { MemberModelSchema, MemberRoleSchema } from "@/prisma/generated/schemas";
import { ProfileBaseSchema } from "./profile";

const memberRoleSchema = z.enum(["ADMIN", "MODERATOR", "GUEST"]);

export const MemberBaseSchema = MemberModelSchema.omit({
	profile: true,
	server: true,
	messages: true,
});

export type MemberBase = z.infer<typeof MemberBaseSchema>;

export const ServerMemberDTO = MemberBaseSchema.extend(
	z.object({
		profile: ProfileBaseSchema.pick({
			id: true,
			name: true,
			imageUrl: true,
		}),
	}),
);

export type ServerMember = z.infer<typeof ServerMemberDTO>;

export const MemberRefDTO = MemberBaseSchema.pick({
	id: true,
	role: true,
	serverId: true,
	profileId: true,
});

export type MemberRef = z.infer<typeof MemberRefDTO>;

export const AddMemberInput = z.object({
	serverId: z.uuid(),
	role: MemberRoleSchema.optional(),
});

export type AddMemberInput = z.infer<typeof AddMemberInput>;

export const UpdateMemberRoleInput = z.object({
	memberId: z.uuid(),
	role: memberRoleSchema,
});

export type UpdateMemberRoleInput = z.infer<typeof UpdateMemberRoleInput>;
