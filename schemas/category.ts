import z from "zod";
import { ChannelBaseSchema } from "./channel";

export const CategorySchema = z.object({
	id: z.string(),
	name: z.string(),
	channels: z.array(ChannelBaseSchema),
});

export type Category = z.infer<typeof CategorySchema>;
