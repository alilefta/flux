"use client";

import { motion, Variants } from "motion/react";
import Link from "next/link";
import { ChevronRight, Command, Hash, MoveRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const containerVariants: Variants = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: { staggerChildren: 0.15, delayChildren: 0.2 },
	},
};

const itemVariants: Variants = {
	hidden: { opacity: 0, y: 20 },
	show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
};

export const HeroSection = () => {
	return (
		<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden w-full flex flex-col items-center">
			{/* 1. ATMOSPHERIC BACKGROUND */}
			<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 md:w-300 h-150 bg-indigo-600/15 blur-[120px] rounded-[100%] pointer-events-none" />
			<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px][mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

			<motion.div variants={containerVariants} initial="hidden" animate="show" className="relative z-10 max-w-5xl mx-auto px-6 flex flex-col items-center text-center">
				{/* Badge */}
				<motion.div variants={itemVariants}>
					<Link
						href="/sign-up"
						className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-indigo-300 hover:bg-white/10 transition-colors mb-8 cursor-pointer group"
					>
						<Sparkles className="w-3.5 h-3.5 text-indigo-400 group-hover:text-indigo-300" />
						<span>Flux v1.0 is now available</span>
						<ChevronRight className="w-3.5 h-3.5 text-zinc-500 group-hover:translate-x-0.5 transition-transform" />
					</Link>
				</motion.div>

				{/* H1 SEO Headline */}
				<motion.h1 variants={itemVariants} className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter leading-[1.05] mb-6">
					Collaborate at the <br className="hidden md:block" />
					<span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 via-purple-400 to-indigo-400 animate-gradient-x">speed of thought.</span>
				</motion.h1>

				{/* Subheadline */}
				<motion.p variants={itemVariants} className="text-lg md:text-xl text-zinc-400 max-w-2xl mb-10 font-medium leading-relaxed">
					The operating system for modern engineering teams. Real-time chat, deeply integrated Kanban boards, and zero-latency communication.
				</motion.p>

				{/* CTA Buttons */}
				<motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
					<Link href="/sign-up" className="w-full sm:w-auto">
						<Button className="w-full sm:w-auto h-14 px-8! text-base font-bold bg-white text-black hover:bg-zinc-200 rounded-full shadow-[0_0_40px_rgba(255,255,255,0.15)] transition-transform hover:scale-105 active:scale-95">
							Start for free
							<MoveRight className="w-4 h-4 ml-2" />
						</Button>
					</Link>
					<Link href="#features" className="w-full sm:w-auto">
						<Button variant="ghost" className="w-full sm:w-auto h-14 px-8 text-base font-bold text-zinc-300 hover:text-white rounded-full hover:bg-white/5 transition-colors">
							<Command className="w-4 h-4 mr-2 text-zinc-500" />
							Press Cmd+K to explore
						</Button>
					</Link>
				</motion.div>

				{/* CSS APP MOCKUP (The "Wow" Factor) */}
				<motion.div variants={itemVariants} className="w-full max-w-5xl mt-20 relative perspective-[2000px]">
					<div className="w-full aspect-video md:aspect-21/9 rounded-t-2xl md:rounded-t-3xl border-t border-l border-r border-white/10 bg-[#09090b]/80 backdrop-blur-xl shadow-2xl overflow-hidden flex transform rotate-x-[5deg] scale-105 origin-bottom relative">
						{/* Mock Sidebar */}
						<div className="w-16 md:w-64 h-full border-r border-white/5 bg-[#141417]/50 flex p-3 md:p-4 gap-3 flex-col">
							<div className="w-full h-8 bg-white/5 rounded-lg mb-4 hidden md:block" />
							{[1, 2, 3, 4].map((i) => (
								<div key={i} className="flex items-center gap-2">
									<div className="w-8 h-8 rounded-full bg-white/5 shrink-0" />
									<div className="h-4 w-full bg-white/5 rounded hidden md:block" />
								</div>
							))}
						</div>

						{/* Mock Main Area */}
						<div className="flex-1 flex flex-col h-full relative">
							<div className="h-12 border-b border-white/5 flex items-center px-4 gap-2 bg-white/2">
								<Hash className="w-4 h-4 text-zinc-500" />
								<div className="h-4 w-24 bg-white/10 rounded" />
							</div>
							<div className="flex-1 p-6 flex flex-col justify-end gap-6">
								{[1, 2, 3].map((i) => (
									<div key={i} className="flex gap-4">
										<div className="w-10 h-10 rounded-full bg-indigo-500/20 shrink-0" />
										<div className="space-y-2 w-full max-w-md">
											<div className="flex gap-2 items-center">
												<div className="h-3 w-20 bg-white/10 rounded" />
												<div className="h-2 w-12 bg-white/5 rounded" />
											</div>
											<div className="h-4 w-[80%] bg-white/5 rounded" />
											<div className="h-4 w-[60%] bg-white/5 rounded" />
										</div>
									</div>
								))}
								{/* Mock Input */}
								<div className="w-full h-12 bg-black/40 border border-white/10 rounded-xl mt-4" />
							</div>

							{/* Gradient Fade out at bottom so it blends into the next section */}
							<div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-[#030304] to-transparent" />
						</div>
					</div>
				</motion.div>
			</motion.div>
		</section>
	);
};
