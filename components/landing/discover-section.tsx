import Link from "next/link";
import Image from "next/image";
import { Globe, Users, LayoutDashboard, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { ServerBase } from "@/schemas/server.base";

// Define the shape based on our query
interface PublicServer extends ServerBase {
	_count?: {
		members: number;
	};
}

interface DiscoverSectionProps {
	servers: PublicServer[];
}

export const DiscoverSection = ({ servers }: DiscoverSectionProps) => {
	return (
		<section id="discover" className="w-full py-24 px-6 md:px-12 relative border-t border-white/5 bg-[#09090b]">
			{/* Subtle Grid Background Pattern */}
			<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-20 pointer-events-none" />

			<div className="max-w-6xl mx-auto relative z-10">
				{/* Header */}
				<div className="flex flex-col md:flex-row items-center md:items-end justify-between mb-12 gap-6 text-center md:text-left">
					<div>
						<h2 className="text-3xl md:text-4xl font-bold text-white flex items-center justify-center md:justify-start gap-3 tracking-tight">
							<Globe className="w-8 h-8 text-indigo-400" />
							Discover Communities
						</h2>
						<p className="text-zinc-400 mt-3 text-lg max-w-2xl">Join open workspaces, collaborate with other engineers, and see Flux in action instantly.</p>
					</div>
				</div>

				{/* Grid or Empty State */}
				{servers.length > 0 ? (
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
						{servers.map((server) => (
							<Link
								key={server.id}
								href={`/invite/${server.inviteCode}`}
								className="group relative bg-[#141417]/80 backdrop-blur-md p-6 rounded-3xl border border-white/5 hover:border-indigo-500/30 transition-all duration-300 flex flex-col items-center text-center overflow-hidden hover:-translate-y-1 hover:shadow-[0_10px_40px_-10px_rgba(79,70,229,0.2)]"
							>
								{/* Hover Glow */}
								<div className="absolute inset-0 bg-gradient-to-b from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

								{/* Server Icon */}
								<div className="relative w-20 h-20 rounded-2xl overflow-hidden mb-5 border border-white/10 shadow-xl group-hover:scale-105 transition-transform duration-300 bg-[#1e1e22]">
									{server.imageUrl ? (
										<Image src={server.imageUrl} alt={server.name} fill className="object-cover" sizes="(max-width: 768px) 100vw, 80px" />
									) : (
										<div className="w-full h-full flex items-center justify-center text-3xl font-black text-zinc-600">{server.name[0].toUpperCase()}</div>
									)}
								</div>

								{/* Server Info */}
								<h3 className="font-bold text-white text-xl truncate w-full group-hover:text-indigo-300 transition-colors">{server.name}</h3>
								<p className="text-zinc-400 text-sm mt-2 mb-6 line-clamp-2 px-2 h-10">{server.description || "A public workspace on Flux."}</p>

								{/* Footer: Member Count & Action */}
								<div className="mt-auto w-full flex items-center justify-between pt-4 border-t border-white/5">
									<div className="flex items-center gap-1.5 text-xs font-bold text-emerald-400 bg-emerald-400/10 px-3 py-1 rounded-full border border-emerald-400/20">
										<Users className="w-3.5 h-3.5" />
										{server._count?.members || server.memberCount || 1}
									</div>
									<span className="text-xs font-bold text-zinc-500 group-hover:text-white flex items-center gap-1 transition-colors">
										Join <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
									</span>
								</div>
							</Link>
						))}
					</div>
				) : (
					<div className="w-full p-12 bg-[#141417]/50 backdrop-blur-sm rounded-3xl border border-white/5 text-center flex flex-col items-center shadow-inner">
						<div className="p-4 bg-white/5 rounded-full mb-4">
							<LayoutDashboard className="w-10 h-10 text-zinc-500" />
						</div>
						<h3 className="text-2xl font-bold text-white mb-2">No public servers yet</h3>
						<p className="text-zinc-400 max-w-md mx-auto mb-6">
							Be the first to create a public community! Go to your server settings and toggle &quot;Make Public&quot; to feature it here.
						</p>
						<Link href="/setup" className="px-6 py-3 bg-white text-black font-bold rounded-full hover:bg-zinc-200 transition-colors">
							Create a Workspace
						</Link>
					</div>
				)}
			</div>
		</section>
	);
};
