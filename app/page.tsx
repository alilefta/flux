import { Navbar } from "@/components/landing/navbar";
import { HeroSection } from "@/components/landing/hero-section";
import { SocialProof } from "@/components/landing/social-proof";
import { getPublicServers } from "@/data/server";
import { DiscoverSection } from "@/components/landing/discover-section";
import Link from "next/link";

export default async function LandingPage() {
	const publicServers = await getPublicServers();
	return (
		<div className="min-h-screen w-full bg-[#030304] text-zinc-200 font-sans selection:bg-indigo-500/30 overflow-x-hidden">
			{/* Fixed Navigation */}
			<Navbar />

			<main className="w-full flex flex-col items-center">
				{/* Section 1: The Hero */}
				<HeroSection />

				{/* Section 2: Social Proof (Placeholder for next step) */}
				<SocialProof />

				{/* Section 3: Discover Servers (Placeholder for next step) */}
				<DiscoverSection servers={publicServers} />
			</main>
			{/* Simple Footer */}
			<footer className="py-8 text-center text-zinc-500 text-sm border-t border-white/5 bg-[#030304]">
				<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
					<span>© {new Date().getFullYear()} Flux Collaboration. All rights reserved.</span>
					<div className="flex gap-6">
						<Link href="#" className="hover:text-white transition">
							Twitter
						</Link>
						<Link href="#" className="hover:text-white transition">
							GitHub
						</Link>
						<Link href="#" className="hover:text-white transition">
							Terms
						</Link>
					</div>
				</div>
			</footer>
		</div>
	);
}
