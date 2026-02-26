"use server";

import { actionClientWithProfile } from "@/lib/safe-action";
import { getOrCreateConversation } from "@/data/conversation";
import { z } from "zod";
import { ERRORS } from "@/lib/errors";

export const getOrCreateConversationAction = actionClientWithProfile
	.metadata({
		actionName: "create-conversation",
	})
	.inputSchema(z.object({ memberId: z.string() })) // memberId here refers to TARGET Profile ID
	.action(async ({ ctx, parsedInput }) => {
		const { memberId } = parsedInput;

		try {
			const conversation = await getOrCreateConversation(ctx.profile.id, memberId);
			return { success: true, conversationId: conversation?.id };
		} catch (e) {
			console.error("[create-conversation-action] Error:", e);
			throw ERRORS.INTERNAL_SERVER_ERROR;
		}
	});
