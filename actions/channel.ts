"use server";

import prisma from "@/lib/prisma";
import { actionClientWithProfile } from "@/lib/safe-action";
import { CreateChannelInput } from "@/schemas/channel";
import { flattenValidationErrors } from "next-safe-action";

export const createChannel = actionClientWithProfile
	.metadata({
		actionName: "create-channel-action",
	})
	.inputSchema(CreateChannelInput, {
		handleValidationErrorsShape: async (ve, utils) => flattenValidationErrors(ve).fieldErrors,
	})
	.action(async ({ parsedInput, ctx }) => {
		if (!ctx.profile) return { success: false, error: "Unauthorized" };

		const { name, serverId, type } = parsedInput;

		try {
			const channel = await prisma.channel.create({
				data: {
					name,
					serverId,
					profileId: ctx.profile.id,
					type,
				},
			});

			return { success: true, data: channel };
		} catch (e) {
			throw e;
		}
	});
