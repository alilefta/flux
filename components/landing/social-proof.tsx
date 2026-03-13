"use client";

import { Box, Command, Hexagon, Infinity as InfinityIcon, Triangle, Layers } from "lucide-react";

// Mock premium startup brands
const COMPANIES = [
	{ name: "Acme Corp", icon: Hexagon },
	{ name: "Globex", icon: Triangle },
	{ name: "Soylent", icon: Layers },
	{ name: "Initech", icon: Box },
	{ name: "Massive Dynamic", icon: Command },
	{ name: "Umbrella", icon: InfinityIcon },
];

export const SocialProof = () => {
	// We duplicate the array so the marquee loops seamlessly
	const SCROLLING_ITEMS = [...COMPANIES, ...COMPANIES, ...COMPANIES];

	return (
		<section className="w-full border-t border-white/5 py-16 bg-[#050505] overflow-hidden relative">
			<div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center">
				<p className="text-xs font-bold text-zinc-500 uppercase tracking-[0.3em] mb-10 text-center">Trusted by high-performance engineering teams</p>

				{/* 
          The Mask Image creates a fade-out effect on the left and right edges.
          This makes the logos emerge from the darkness smoothly.
        */}
				<div
					className="w-full relative flex items-center"
					style={{
						maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
						WebkitMaskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
					}}
				>
					{/* The Scrolling Track */}
					<div className="flex w-max animate-marquee hover:animation-play-state-paused">
						{SCROLLING_ITEMS.map((company, index) => (
							<div
								key={`${company.name}-${index}`}
								className="flex items-center gap-3 px-12 md:px-20 opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300 cursor-default"
							>
								<company.icon className="w-6 h-6 text-zinc-400" />
								<span className="text-xl font-bold text-zinc-400 tracking-tight">{company.name}</span>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};
