import { redirect } from "next/navigation";
import { getCurrentProfile } from "@/data/profile"; // Check your import path
import { SetupUI } from "@/components/setup/setup-ui";
import { SetupNavbar } from "@/components/setup/setup-navbar";
import { getFirstServerForProfileId } from "@/data/server";

export default async function SetupPage() {
	const profile = await getCurrentProfile();

	if (!profile) redirect("/sign-in");

	const server = await getFirstServerForProfileId(profile.id);

	if (server) {
		return redirect(`/servers/${server.id}`);
	}

	return (
		<div className="min-h-screen w-full flex items-center justify-center bg-background relative overflow-hidden">
			<SetupNavbar />
			<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-primary/20 blur-[150px] rounded-full animate-aurora pointer-events-none" />
			<div className="relative z-10 w-full flex justify-center px-4">
				<SetupUI />
			</div>
		</div>
	);
}
