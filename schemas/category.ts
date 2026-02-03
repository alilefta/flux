import z from "zod";
import { ChannelSchema } from "./channel";

export const CategorySchema = z.object({
	id: z.string(),
	name: z.string(),
	channels: z.array(ChannelSchema),
});

export type Category = z.infer<typeof CategorySchema>;
