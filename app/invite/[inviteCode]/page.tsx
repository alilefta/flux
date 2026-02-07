import { redirect, notFound } from "next/navigation";
import { currentProfile } from "@/data/current-profile";
import prisma from "@/lib/prisma";
import { InviteUI } from "@/components/invite/invite-ui";

interface InvitePageProps {
	params: Promise<{ inviteCode: string }>;
}

export default async function InvitePage({ params }: InvitePageProps) {
	const { inviteCode } = await params;
	const profile = await currentProfile();

	if (!profile) {
		return redirect("/sign-in");
	}

	const server = await prisma.server.findUnique({
		where: { inviteCode },
		include: {
			_count: {
				select: { members: true },
			},
		},
	});

	if (!server) return notFound();

	const existingMember = await prisma.member.findFirst({
		where: {
			serverId: server.id,
			profileId: profile.id,
		},
	});

	if (existingMember) {
		return redirect(`/servers/${server.id}`);
	}

	return (
		<div className="min-h-screen w-full flex items-center justify-center bg-[#09090b] relative overflow-hidden selection:bg-indigo-500/30">
			{/* 1. Technical Grid Background */}
			<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

			{/* 2. Top Spotlight (God Ray) */}
			<div className="absolute top-0 left-1/2 -translate-x-1/2 w-250 h-100 bg-indigo-500/20 blur-[120px] rounded-[100%] pointer-events-none opacity-50" />

			{/* 3. The Card */}
			<div className="relative z-10 p-4 w-full flex justify-center">
				<InviteUI server={server} memberCount={server._count.members} />
			</div>
		</div>
	);
}
