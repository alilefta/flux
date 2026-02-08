import Link from "next/link";
import { ArrowLeft, SearchX } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ServerNotFound() {
	return (
		<div className="h-full w-full flex flex-col items-center justify-center bg-[#141417]/60 backdrop-blur-xl border border-white/5 rounded-3xl shadow-2xl relative overflow-hidden">
			{/* Soft Ambient Background */}
			<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-100 h-100 bg-zinc-900/50 blur-[100px] rounded-full pointer-events-none" />

			<div className="relative z-10 flex flex-col items-center text-center space-y-6 p-8 max-w-md">
				{/* Icon */}
				<div className="w-16 h-16 bg-zinc-900/80 rounded-2xl flex items-center justify-center border border-white/5 shadow-sm">
					<SearchX className="w-8 h-8 text-zinc-400" />
				</div>

				{/* Text Content */}
				<div className="space-y-2">
					<h1 className="text-xl font-semibold text-white">Workspace not found</h1>
					<p className="text-sm text-zinc-400 leading-relaxed">
						We couldn&apos;t find the workspace you&apos;re looking for. It may have been deleted, or you might not have permission to view it.
					</p>
				</div>

				{/* Action */}
				<Link href="/setup">
					<Button variant="secondary" className="bg-white/5 hover:bg-white/10 text-white border border-white/5 h-10 px-6">
						<ArrowLeft className="w-4 h-4 mr-2" />
						Back to Setup
					</Button>
				</Link>
			</div>
		</div>
	);
}
