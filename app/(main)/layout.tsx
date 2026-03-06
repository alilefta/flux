import { redirect } from "next/navigation";
import { getCurrentProfile } from "@/data/profile";

export default async function MainLayout({ children }: { children: React.ReactNode }) {
	// 1. Fetch Profile ONCE for the entire main section
	const profile = await getCurrentProfile();

	if (!profile) {
		return redirect("/sign-in");
	}

	return (
		// 2. Wrap everything in the Provider
		<div className="h-full w-full">{children}</div>
	);
}
