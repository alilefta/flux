import z from "zod";
import { ProfileModelSchema } from "@/prisma/generated/schemas";

export const ProfileBaseSchema = ProfileModelSchema.omit({
	servers: true,
	members: true,
	channels: true,
	conversationsInitiated: true,
	conversationsReceived: true,
	directMessages: true,
});

export type ProfileBase = z.infer<typeof ProfileBaseSchema>;

export const PublicProfileDTO = ProfileBaseSchema.pick({
	id: true,
	name: true,
	imageUrl: true,
});

export type PublicProfile = z.infer<typeof PublicProfileDTO>;

export const CurrentProfileDTO = ProfileBaseSchema.pick({
	id: true,
	clerkId: true,
	name: true,
	email: true,
	imageUrl: true,
	createdAt: true,
});

export type CurrentProfile = z.infer<typeof CurrentProfileDTO>;

export const CreateProfileInput = z.object({
	clerkId: z.string(),
	name: z.string().min(1),
	email: z.email(),
	imageUrl: z.url().optional(),
});

export type CreateProfileInput = z.infer<typeof CreateProfileInput>;

export const UpdateProfileInput = z.object({
	name: z.string().min(1).optional(),
	imageUrl: z.url().optional(),
});

export type UpdateProfileInput = z.infer<typeof UpdateProfileInput>;
