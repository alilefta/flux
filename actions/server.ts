"use server";
import { v4 as uuidv4 } from "uuid";
import { actionClientWithProfile } from "@/lib/safe-action";
import { CreateServerSchema, DeleteServerSchema, joinServerSchema, LeaveServerSchema, UpdateServerSchema } from "@/schemas/server";
import { MemberRole } from "@/generated/prisma/enums";
import { revalidatePath } from "next/cache";
import prisma from "@/lib/prisma";
import { flattenValidationErrors } from "next-safe-action";
import { ActionError, ERRORS } from "@/lib/errors";

export const createServerAction = actionClientWithProfile
	.metadata({
		actionName: "create-server-action",
	})
	.inputSchema(CreateServerSchema, {
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
						create: [{ name: "general", profileId: profile.id, isDefault: true, type: "TEXT" }],
					},
					members: {
						create: [{ profileId: profile.id, role: MemberRole.ADMIN }],
					},
				},
			});

			// We don't necessarily need to revalidate here if we are redirecting on the client,
			// but it's good practice if this action is used elsewhere.
			revalidatePath("/");

			return { success: true, server };
		} catch (error: unknown) {
			console.error(error);
			throw ERRORS.INTERNAL_SERVER_ERROR;
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
			throw ERRORS.INTERNAL_SERVER_ERROR;
		}
	});

export const updateServerAction = actionClientWithProfile
	.metadata({ actionName: "update-server-action" })
	.inputSchema(UpdateServerSchema)
	.action(async ({ parsedInput, ctx: { profile } }) => {
		const { name, imageUrl, serverId } = parsedInput;

		if (!serverId) {
			throw new ActionError("Server ID is missing", "INVALID_INPUT", 400);
		}

		const member = await prisma.member.findFirst({
			where: {
				serverId,
				profileId: profile.id,
			},
		});

		console.info("INFO:========", {
			profile: profile,
			server_data: parsedInput,
		});

		const isAdmin = member?.role === "ADMIN";

		if (!member || !isAdmin) {
			throw new ActionError("Unauthorized: Only Admins can update server settings", "FORBIDDEN", 403);
		}

		try {
			const updatedServer = await prisma.server.update({
				where: {
					id: serverId,
				},
				data: {
					name,
					imageUrl,
				},
			});

			revalidatePath(`/servers/${serverId}`);
			return { success: true, updatedServer };
		} catch (error) {
			console.error("[UPDATE-SERVER] error", error);
			throw ERRORS.INTERNAL_SERVER_ERROR;
		}
	});

export const leaveServerAction = actionClientWithProfile
	.metadata({ actionName: "leave-server-action" })
	.inputSchema(LeaveServerSchema)
	.action(async ({ parsedInput, ctx: { profile } }) => {
		const { serverId } = parsedInput;

		const server = await prisma.server.findUnique({
			where: { id: serverId },
		});

		if (!server) throw ERRORS.NOT_FOUND;

		// we should update the server (profileId) to be ownerId
		if (server?.profileId === profile.id) {
			throw new ActionError("Owners cannot leave their own server. You must delete it or transfer ownership.", "INVALID_OPERATION", 401);
		}

		try {
			await prisma.member.deleteMany({
				where: {
					serverId,
					profileId: profile.id,
				},
			});

			revalidatePath("/");
			return { success: true };
		} catch (error) {
			console.error("[LEAVE-SERVER] error", error);
			throw ERRORS.INTERNAL_SERVER_ERROR;
		}
	});

export const deleteServerAction = actionClientWithProfile
	.metadata({ actionName: "delete-server-action" })
	.inputSchema(DeleteServerSchema)
	.action(async ({ parsedInput, ctx: { profile } }) => {
		const { serverId } = parsedInput;

		try {
			const server = await prisma.server.delete({
				where: {
					id: serverId,
					profileId: profile.id,
				},
			});

			return { success: true, server };
		} catch (error) {
			console.error("[DELETE-SERVER] error", error);
			throw ERRORS.INTERNAL_SERVER_ERROR;
		}
	});
