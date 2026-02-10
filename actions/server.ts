"use server";
import { v4 as uuidv4 } from "uuid";
import { actionClientWithProfile } from "@/lib/safe-action";
import { CreateServerInput, joinServerSchema } from "@/schemas/server";
import { MemberRole } from "@/generated/prisma/enums";
import { revalidatePath } from "next/cache";
import prisma from "@/lib/prisma";
import { flattenValidationErrors } from "next-safe-action";

export const createServerAction = actionClientWithProfile
	.metadata({
		actionName: "create-server-action",
	})
	.inputSchema(CreateServerInput, {
		handleValidationErrorsShape: async (ve) => flattenValidationErrors(ve).fieldErrors,
	})
	.action(async ({ parsedInput: { name, imageUrl }, ctx: { profile } }) => {
		try {
			const server = await prisma.server.create({
				data: {
					profileId: profile.id,
					name,
					imageUrl,
					inviteCode: uuidv4(),
					channels: {
						create: [{ name: "general", profileId: profile.id }],
					},
					members: {
						create: [{ profileId: profile.id, role: MemberRole.ADMIN }],
					},
				},
			});

			// We don't necessarily need to revalidate here if we are redirecting on the client,
			// but it's good practice if this action is used elsewhere.
			revalidatePath("/");

			return { success: true, data: server };
		} catch (error: unknown) {
			console.error(error);
			return { success: false, error: "Failed to create server" };
		}
	});

export const joinServerAction = actionClientWithProfile
	.metadata({
		actionName: "join-server-action",
	})
	.inputSchema(joinServerSchema, {
		handleValidationErrorsShape: async (ve) => flattenValidationErrors(ve).fieldErrors,
	})
	.action(async ({ parsedInput: { inviteCode }, ctx: { profile } }) => {
		try {
			// 1. Find the server with this code
			const server = await prisma.server.findUnique({
				where: { inviteCode },
				include: { members: true }, // Check if already a member
			});

			if (!server) {
				return { success: false, error: "Server not found or invalid code." };
			}

			// 2. Check if user is already a member
			const existingMember = server.members.find((m) => m.profileId === profile.id);

			if (existingMember) {
				return { success: true, serverId: server.id }; // Just redirect
			}

			// Create Member & update the sever's memeber count
			await prisma.$transaction([
				// 1. Create the Member
				prisma.member.create({
					data: {
						profileId: profile.id,
						serverId: server.id,
						role: MemberRole.GUEST,
					},
				}),
				// 2. Increment the Counter
				prisma.server.update({
					where: { id: server.id },
					data: {
						memberCount: {
							increment: 1, // Atomic increment
						},
					},
				}),
			]);

			return { success: true, serverId: server.id };
		} catch (error) {
			console.error("[JOIN_SERVER]", error);
			return { success: false, error: "Failed to join server" };
		}
	});

export const leaveServerAction = actionClientWithProfile
	.metadata({
		actionName: "join-server-action",
	})
	.inputSchema(joinServerSchema, {
		handleValidationErrorsShape: async (ve) => flattenValidationErrors(ve).fieldErrors,
	})
	.action(async ({ parsedInput: { inviteCode }, ctx: { profile } }) => {
		try {
			// 1. Find the server with this code
			const server = await prisma.server.findUnique({
				where: { inviteCode },
				include: { members: true }, // Check if already a member
			});

			if (!server) {
				return { success: false, error: "Server not found or invalid code." };
			}

			// 2. Check if user is already a member
			const existingMember = server.members.find((m) => m.profileId === profile.id);

			if (existingMember) {
				return { success: true, serverId: server.id }; // Just redirect
			}

			// Create Member & update the sever's memeber count
			await prisma.$transaction([
				// 1. Create the Member
				prisma.member.create({
					data: {
						profileId: profile.id,
						serverId: server.id,
						role: MemberRole.GUEST,
					},
				}),
				// 2. Increment the Counter
				prisma.server.update({
					where: { id: server.id },
					data: {
						memberCount: {
							increment: 1, // Atomic increment
						},
					},
				}),
			]);

			return { success: true, serverId: server.id };
		} catch (error) {
			console.error("[JOIN_SERVER]", error);
			return { success: false, error: "Failed to join server" };
		}
	});
