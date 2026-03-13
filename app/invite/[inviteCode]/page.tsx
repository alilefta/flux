import { redirect, notFound } from "next/navigation";
import { getCurrentProfile } from "@/data/profile";
import { InviteUI } from "@/components/invite/invite-ui";
import { requireAuth } from "@/lib/auth";
import { getServerByIniteCode } from "@/data/server";
import { getMemberByServerAndProfileId } from "@/data/member";

interface InvitePageProps {
	params: Promise<{ inviteCode: string }>;
}

export default async function InvitePage({ params }: InvitePageProps) {
	const { inviteCode } = await params;
	await requireAuth();

	const profile = await getCurrentProfile();

	if (!profile) {
		return redirect("/sign-in");
	}

	const server = await getServerByIniteCode(inviteCode);

	if (!server) return notFound();

	const existingMember = await getMemberByServerAndProfileId(server.id, profile.id);

	if (existingMember) {
		return redirect(`/servers/${server.id}`);
	}

	return (
		<div className="min-h-screen w-full flex items-center justify-center bg-[#09090b] relative overflow-hidden selection:bg-indigo-500/30">
			{/* 1. Technical Grid Background */}
			<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]"></div>

			{/* 2. Top Spotlight (God Ray) */}
			<div className="absolute top-0 left-1/2 -translate-x-1/2 w-250 h-100 bg-indigo-500/20 blur-[120px] rounded-[100%] pointer-events-none opacity-50" />

			{/* 3. The Card */}
			<div className="relative z-10 p-4 w-full flex justify-center">
				<InviteUI server={server} memberCount={server._count.members} />
			</div>
		</div>
	);
}
