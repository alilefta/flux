import { Server } from "@/schemas/server";
import { Profile } from "@/schemas/profile";

export const currentProfile: Profile = {
	id: "user-1",
	name: "shadcn-fan",
	email: "dev@flux.app",
	imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	status: "ONLINE",
};

export const dummyServers: Server[] = [
	{
		id: "server-1",
		name: "Flux Engineering",
		imageUrl: "", // Empty string to test fallback
		inviteCode: "flux-eng",
		profileId: "user-1",
		email: "support@react.dev",
		categories: [
			{
				id: "cat-1",
				name: "General",
				channels: [
					{ id: "ch-1", name: "welcome", type: "TEXT" },
					{ id: "ch-2", name: "announcements", type: "TEXT" },
				],
			},
			{
				id: "cat-2",
				name: "Development",
				channels: [
					{ id: "ch-3", name: "frontend", type: "TEXT" },
					{ id: "ch-4", name: "backend", type: "TEXT" },
					{ id: "ch-5", name: "standup", type: "AUDIO" },
				],
			},
		],
	},
	{
		id: "server-2",
		name: "React Community",
		imageUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
		inviteCode: "react-co",
		profileId: "user-1",
		email: "support@react.dev",
	},
];
