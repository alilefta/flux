"use client";

import Link from "next/link";
import { useAuth } from "@clerk/nextjs";
import { Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const Navbar = () => {
	const { userId, isLoaded } = useAuth();
	const [scrolled, setScrolled] = useState(false);

	// Add a subtle border/background when scrolling
	useEffect(() => {
		const handleScroll = () => setScrolled(window.scrollY > 20);
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<header
			className={cn(
				"fixed top-0 left-0 right-0 h-20 flex items-center justify-between px-6 md:px-12 z-50 transition-all duration-300",
				scrolled ? "bg-[#030304]/80 backdrop-blur-xl border-b border-white/5 shadow-2xl" : "bg-transparent",
			)}
		>
			{/* Brand */}
			<Link href="/" className="flex items-center gap-3 group">
				<div className="w-8 h-8 bg-linear-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/20 group-hover:shadow-indigo-500/40 transition-all">
					<Zap className="w-4 h-4 text-white fill-white" />
				</div>
				<span className="font-bold tracking-tight text-xl text-white">Flux</span>
			</Link>

			{/* Auth Actions */}
			<div className="flex items-center gap-4">
				{!isLoaded ? (
					<div className="w-24 h-10 bg-white/5 animate-pulse rounded-full" />
				) : userId ? (
					<Link href="/setup">
						<Button className="bg-white hover:bg-zinc-200 text-black font-bold rounded-full px-6 transition-transform hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
							Open Dashboard
						</Button>
					</Link>
				) : (
					<>
						<Link href="/sign-in" className="text-sm font-semibold text-zinc-400 hover:text-white transition hidden md:block">
							Log in
						</Link>
						<Link href="/sign-up">
							<Button className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-full px-6 transition-transform hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(79,70,229,0.3)]">
								Get Started
							</Button>
						</Link>
					</>
				)}
			</div>
		</header>
	);
};
