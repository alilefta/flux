import z from "zod";

export const ChatTypeSchema = z.enum(["channel", "conversation"]);
export type ChatType = z.infer<typeof ChatTypeSchema>;
