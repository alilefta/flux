import z from "zod";
export const ChannelSchema = z.object({
	id: z.string(),
	name: z.string(),
	type: z.enum(["TEXT", "AUDIO", "VIDEO"]),
});

export type Channel = z.infer<typeof ChannelSchema>;

export const CreateChannelSchema = z.object({
	profileId: z.string(),
});
