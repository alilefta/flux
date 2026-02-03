import z from "zod";

export const ProfileSchema = z.object({
	id: z.string(),
	name: z.string(),
	imageUrl: z.string(),
	email: z.string(),
	status: z.enum(["ONLINE", "IDLE", "DND", "OFFLINE"]),
});

export type Profile = z.infer<typeof ProfileSchema>;
