import z from "zod";
import { ProfileBaseSchema } from "@/schemas/profile";
import { MemberBaseSchema } from "./member";
import { ChannelBaseSchema } from "./channel";
import { ServerModelSchema } from "@/prisma/generated/schemas";

export const ServerBaseSchema = ServerModelSchema.omit({
	profile: true,
	members: true,
	channels: true,
});

export type ServerBase = z.infer<typeof ServerBaseSchema>;

export const ServerListItemDTO = ServerBaseSchema.pick({
	id: true,
	name: true,
	imageUrl: true,
	memberCount: true,
});

export type ServerListItem = z.infer<typeof ServerListItemDTO>;

// ===== matches:
// include: {
// 	channels: true,
// 	members: { include: { profile: true } },
// }

export const ServerDetailsDTO = ServerBaseSchema.merge(
	z.object({
		channels: z.array(ChannelBaseSchema),
		members: z.array(
			MemberBaseSchema.extend(
				z.object({
					profile: ProfileBaseSchema,
				}),
			),
		),
	}),
);

export type ServerDetails = z.infer<typeof ServerDetailsDTO>;

export const CreateServerInput = z.object({
	name: z.string().min(1).max(100),
	imageUrl: z.url(),
});

export type CreateServerInput = z.infer<typeof CreateServerInput>;

export const joinServerSchema = z.object({
	inviteCode: z.string(),
});

export const UpdateServerInput = z.object({
	name: z.string().min(1).max(100).optional(),
	imageUrl: z.url().optional(),
});

export type UpdateServerInput = z.infer<typeof UpdateServerInput>;

export const serverInviteSchema = z.object({
	server: ServerBaseSchema,
	_count: z.object({
		members: z.number(),
	}),
});
export type ServerInviteDTO = z.infer<typeof serverInviteSchema>;
