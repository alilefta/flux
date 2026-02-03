import z from "zod";
import { ProfileSchema } from "@/schemas/profile";
import { CategorySchema } from "./category";
export const ServerSchema = z.object({
	id: z.string(),
	email: z.string(),
	name: z.string(),
	imageUrl: z.string(),
	inviteCode: z.string(),
	profileId: z.string(),
	members: z.array(ProfileSchema).optional(),
	categories: z.array(CategorySchema).optional(), // Optional as we might fetch lazily later
});

export type Server = z.infer<typeof ServerSchema>;
