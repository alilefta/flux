"use server";

import { MemberRole } from "@/generated/prisma/enums";
import { actionClientWithProfile } from "@/lib/safe-action";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { KickMemberSchema, UpdateMemberRoleSchema } from "@/schemas/member";
import { ActionError, ERRORS } from "@/lib/errors";

export const updateMemberRoleAction = actionClientWithProfile
	.metadata({ actionName: "update-member-role" })
	.inputSchema(UpdateMemberRoleSchema)
	.action(async ({ parsedInput, ctx: { profile } }) => {
		const { serverId, memberId, role } = parsedInput;

		// 1. SECURITY: Ensure current user is ADMIN
		// Moderators typically cannot promote people to Admin, only Admins can.
		const currentMember = await prisma.member.findFirst({
			where: { serverId, profileId: profile.id },
		});

		if (!currentMember || currentMember.role !== MemberRole.ADMIN) {
			throw new Error("Unauthorized: Only Admins can manage roles");
		}

		// 2. LOGIC: Update the target member directly
		// Safety check: Don't allow changing your own role via this action (prevent lockout)
		if (memberId === currentMember.id) {
			throw new Error("Cannot change your own role");
		}

		const updatedMember = await prisma.member.update({
			where: {
				id: memberId,
				// Double check they belong to this server
				serverId: serverId,
			},
			data: {
				role,
			},
			include: {
				profile: true, // Return profile for UI updates if needed
			},
		});

		revalidatePath(`/servers/${serverId}`);
		return { success: true, member: updatedMember };
	});

export const kickMemberAction = actionClientWithProfile
	.metadata({ actionName: "kick-member" })
	.inputSchema(KickMemberSchema)
	.action(async ({ parsedInput, ctx: { profile } }) => {
		const { serverId, memberId } = parsedInput;

		// 1. SECURITY: Ensure current user is ADMIN or MODERATOR
		const currentMember = await prisma.member.findFirst({
			where: { serverId, profileId: profile.id },
		});

		if (!currentMember || currentMember.role === MemberRole.GUEST) {
			throw ERRORS.UNAUTHORIZED;
		}

		// 2. CHECK TARGET:
		// - Mods cannot kick Admins.
		// - Mods can kick Guests.
		const targetMember = await prisma.member.findUnique({
			where: { id: memberId },
		});

		if (!targetMember) throw new Error("Member not found");

		// Prevent kicking self
		if (targetMember.profileId === profile.id) {
			throw new ActionError("Cannot kick yourself", "INVALID_INPUT", 401);
		}

		// Hierarchy Check
		if (currentMember.role === MemberRole.MODERATOR && targetMember.role === MemberRole.ADMIN) {
			throw new ActionError("Moderators cannot kick Admins", "INVALID_INPUT", 401);
		}

		// 3. LOGIC: Delete member directly
		const deletedMember = await prisma.member.delete({
			where: {
				id: memberId,
				serverId: serverId,
			},
			include: {
				profile: true,
			},
		});

		revalidatePath(`/servers/${serverId}`);
		return { success: true, member: deletedMember };
	});
