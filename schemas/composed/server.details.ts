import z from "zod";
import { ChannelBaseSchema } from "../channel";
import { ServerBaseSchema } from "../server.base";
import { MemberBaseSchema } from "../member";
import { ProfileBaseSchema } from "../profile";
import { ChannelCategoryBaseSchema } from "../category.base";
import { AuditLogBaseSchema } from "../audit-log.base";

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

export const ServerDetailsDTO = ServerBaseSchema.extend(
	z.object({
		channels: z.array(ChannelBaseSchema),
		members: z.array(
			MemberBaseSchema.extend(
				z.object({
					profile: ProfileBaseSchema,
				}).shape,
			),
		),
	}).shape,
);

export const ServerCompleteDetailsDTO = ServerBaseSchema.extend(
	z.object({
		channels: z.array(ChannelBaseSchema),
		members: z.array(
			MemberBaseSchema.extend(
				z.object({
					profile: ProfileBaseSchema,
				}).shape,
			),
		),
		categories: z.array(ChannelCategoryBaseSchema),
		auditLog: z.array(
			AuditLogBaseSchema.extend({
				metadata: z.json(),
			}),
		),
	}).shape,
);

export type ServerDetails = z.infer<typeof ServerDetailsDTO>;

export const CreateServerSchema = z.object({
	name: z.string(),
	imageUrl: z.url(),
});

export type CreateServerInput = z.infer<typeof CreateServerSchema>;

export const joinServerSchema = z.object({
	inviteCode: z.string(),
});

export const UpdateServerSchema = z.object({
	name: z.string().min(1).max(100).optional(),
	imageUrl: z.url(),
	serverId: z.uuid(),
});

export type UpdateServerInput = z.infer<typeof UpdateServerSchema>;

export const serverInviteSchema = z.object({
	server: ServerBaseSchema,
	_count: z.object({
		members: z.number(),
	}),
});
export type ServerInviteDTO = z.infer<typeof serverInviteSchema>;

export const LeaveServerSchema = z.object({
	serverId: z.string(),
});

export type LeaveServerInput = z.infer<typeof LeaveServerSchema>;

export const DeleteServerSchema = z.object({
	serverId: z.string(),
});

export type DeleteServerInput = z.infer<typeof DeleteServerSchema>;
