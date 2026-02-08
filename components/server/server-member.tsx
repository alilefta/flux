"use client";

import { MemberRole } from "@/generated/prisma/enums";
import { ProfileBase } from "@/schemas/profile"; // Or from prisma types
import { ShieldAlert, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import { UserAvatar } from "@/components/user/user-avatar"; // Ensure this exists
import { ServerBase } from "@/schemas/server";

interface ServerMemberProps {
	member: {
		id: string;
		role: MemberRole;
		profile: ProfileBase;
	};
	server: ServerBase;
}

const roleIconMap = {
	[MemberRole.GUEST]: null,
	[MemberRole.MODERATOR]: <ShieldCheck className="h-3 w-3 text-indigo-500" />,
	[MemberRole.ADMIN]: <ShieldAlert className="h-3 w-3 text-rose-500" />,
};

export const ServerMember = ({ member, server }: ServerMemberProps) => {
	const icon = roleIconMap[member.role];

	return (
		<button className={cn("group px-2 py-2 rounded-md flex items-center gap-x-2 w-full hover:bg-white/5 transition-all mb-1")}>
			<UserAvatar src={member.profile.imageUrl ?? undefined} className="h-6 w-6 md:h-6 md:w-6" />
			<p className={cn("font-medium text-xs text-zinc-400 group-hover:text-zinc-300 transition-colors")}>{member.profile.name}</p>
			{icon}
		</button>
	);
};
