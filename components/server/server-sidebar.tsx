"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { ServerHeader } from "./server-header";
import { ServerSection } from "./server-section";
import { ServerChannel } from "./server-channel";
import { ServerUserFooter } from "@/components/server/server-user-footer";
import { ServerDetails } from "@/schemas/server";
import { ChannelType, MemberRole } from "@/generated/prisma/enums"; // Import Enums
import { Hash, Mic, Video, ShieldAlert, ShieldCheck } from "lucide-react";
import { ServerMember } from "@/components/server/server-member";
import { useParams } from "next/navigation";
import { MemberProfile } from "@/schemas/member";
import { ProfileBase } from "@/schemas/profile";

interface ServerSidebarProps {
	server: ServerDetails;
	role?: MemberRole; // Pass the current user's role from Layout
	profile: ProfileBase;
}

export const ServerSidebar = ({ server, role, profile }: ServerSidebarProps) => {
	const params = useParams();
	const activeChannelId = params?.channelId as string;

	// 1. Filter Channels by Type
	const textChannels = server.channels.filter((channel) => channel.type === ChannelType.TEXT);
	const audioChannels = server.channels.filter((channel) => channel.type === ChannelType.AUDIO);
	const videoChannels = server.channels.filter((channel) => channel.type === ChannelType.VIDEO);

	// 2. Filter Members (Exclude ourselves if needed, but usually we show everyone)
	// Grouping members by role is also a nice touch for V2, but flat list is fine for MVP
	// const members = server.members.filter((member) => member.profileId !== server.profileId); // Example: hide self, or keep all.

	// // Icon mapping helper
	// const iconMap = {
	// 	[ChannelType.TEXT]: Hash,
	// 	[ChannelType.AUDIO]: Mic,
	// 	[ChannelType.VIDEO]: Video,
	// };

	return (
		<div className="flex flex-col h-full w-64 bg-[#141417]/60 backdrop-blur-xl border border-white/5 rounded-3xl shadow-2xl overflow-hidden flex-shrink-0">
			<ServerHeader server={server} role={role} />

			<ScrollArea className="flex-1 px-3">
				<div className="mt-2 space-y-4">
					{/* GROUP 1: TEXT CHANNELS */}
					{!!textChannels?.length && (
						<div className="mb-2">
							<ServerSection sectionType="channels" channelType={ChannelType.TEXT} role={role} label="Text Channels" />
							<div className="space-y-0.5">
								{textChannels.map((channel) => (
									<ServerChannel key={channel.id} channel={channel} server={server} role={role} isActive={activeChannelId === channel.id} />
								))}
							</div>
						</div>
					)}

					{/* GROUP 2: AUDIO CHANNELS */}
					{!!audioChannels?.length && (
						<div className="mb-2">
							<ServerSection sectionType="channels" channelType={ChannelType.AUDIO} role={role} label="Voice Channels" />
							<div className="space-y-0.5">
								{audioChannels.map((channel) => (
									<ServerChannel key={channel.id} channel={channel} server={server} role={role} isActive={activeChannelId === channel.id} />
								))}
							</div>
						</div>
					)}

					{/* GROUP 3: VIDEO CHANNELS */}
					{!!videoChannels?.length && (
						<div className="mb-2">
							<ServerSection sectionType="channels" channelType={ChannelType.VIDEO} role={role} label="Video Channels" />
							<div className="space-y-0.5">
								{videoChannels.map((channel) => (
									<ServerChannel key={channel.id} channel={channel} server={server} role={role} isActive={activeChannelId === channel.id} />
								))}
							</div>
						</div>
					)}

					{/* GROUP 4: MEMBERS */}
					{!!server.members?.length && (
						<div className="mb-2">
							<ServerSection sectionType="members" role={role} label="Members" server={server} />
							<div className="space-y-0.5">
								{server.members.map((member) => (
									<ServerMember key={member.id} member={member} server={server} />
								))}
							</div>
						</div>
					)}
				</div>
			</ScrollArea>

			<ServerUserFooter profile={profile} />
		</div>
	);
};
