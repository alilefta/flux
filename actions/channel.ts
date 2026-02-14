"use server";

import { z } from "zod";
import { MemberRole } from "@/generated/prisma/enums";
import { actionClientWithProfile } from "@/lib/safe-action";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { CreateChannelInput, DeleteChannelSchema, UpdateChannelInput } from "@/schemas/composed/channel.details"; // Ensure this schema exists
import { ERRORS } from "@/lib/errors";

// 1. CREATE CHANNEL
export const createChannelAction = actionClientWithProfile
	.metadata({ actionName: "create-channel" })
	.inputSchema(CreateChannelInput)
	.action(async ({ parsedInput, ctx: { profile } }) => {
		const { name, type, serverId } = parsedInput;

		if (name === "general") {
			throw ERRORS.CHANNEL_NAME_MUST_NOT_BE_GENERAL;
		}
		// 1. SECURITY: Check if user is a member of this server and has permission
		const member = await prisma.member.findFirst({
			where: {
				serverId,
				profileId: profile.id,
			},
		});

		if (!member || (member.role !== MemberRole.ADMIN && member.role !== MemberRole.MODERATOR)) {
			throw ERRORS.UNAUTHORIZE_ONLY_ADMINS_OR_MODERATORS;
		}

		const channel = await prisma.channel.create({
			data: {
				name,
				type,
				serverId,
				profileId: profile.id,
				isDefault: false,
			},
		});

		revalidatePath(`/servers/${serverId}`);
		return { success: true, channel };
	});

export const updateChannelAction = actionClientWithProfile
	.metadata({ actionName: "update-channel" })
	.inputSchema(UpdateChannelInput)
	.action(async ({ parsedInput, ctx: { profile } }) => {
		const { serverId, channelId, name } = parsedInput;

		// 1. SECURITY: Check if user is a member of this server and has permission
		const member = await prisma.member.findFirst({
			where: {
				serverId,
				profileId: profile.id,
			},
		});

		if (!member || (member.role !== MemberRole.ADMIN && member.role !== MemberRole.MODERATOR)) {
			throw ERRORS.UNAUTHORIZE_ONLY_ADMINS_OR_MODERATORS;
		}

		if (name === "general") {
			throw ERRORS.CHANNEL_NAME_MUST_NOT_BE_GENERAL;
		}

		const updatedChannel = await prisma.channel.update({
			where: {
				id: channelId,
				serverId: serverId,
			},
			data: {
				name,
			},
		});

		revalidatePath(`/servers/${serverId}`);
		return { success: true, channel: updatedChannel };
	});

export const deleteChannelAction = actionClientWithProfile
	.metadata({ actionName: "delete-channel" })
	.inputSchema(DeleteChannelSchema)
	.action(async ({ parsedInput, ctx: { profile } }) => {
		const { serverId, channelId } = parsedInput;

		// 1. SECURITY: Check if user is a member of this server and has permission
		const member = await prisma.member.findFirst({
			where: {
				serverId,
				profileId: profile.id,
			},
		});

		if (!member || (member.role !== MemberRole.ADMIN && member.role !== MemberRole.MODERATOR)) {
			throw ERRORS.UNAUTHORIZE_ONLY_ADMINS_OR_MODERATORS;
		}

		// check channel name
		const channel = await prisma.channel.findUnique({
			where: {
				id: channelId,
			},
		});

		if (!channel) {
			throw ERRORS.NOT_FOUND;
		}

		if (channel.name === "general" || channel.isDefault) {
			throw ERRORS.UNABLE_TO_REMOVE_DEFAULT_GENERAL_CHANNEL;
		}

		const deletedChannel = await prisma.channel.delete({
			where: {
				id: channelId,
				serverId: serverId,
			},
		});

		revalidatePath(`/servers/${serverId}`);
		return { success: true, channel: deletedChannel };
	});
