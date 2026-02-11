import { cn } from "@/lib/utils";
import Image from "next/image";

interface UserAvatarProps {
	src?: string;
	className?: string;
	name?: string; // fallback name
}

export const UserAvatar = ({ src, className, name }: UserAvatarProps) => {
	return (
		<div
			className={cn(
				"relative shrink-0 overflow-hidden rounded-full border border-white/10 bg-zinc-800 flex items-center justify-center text-zinc-400",
				// Default size if not overridden
				"h-7 w-7 md:h-10 md:w-10",
				className,
			)}
		>
			{src ? (
				<Image
					fill
					src={src}
					alt="Avatar"
					className="object-cover"
					// Optimization: Assumes avatar is never wider than 150px in the UI
					sizes="(max-width: 768px) 100vw, 150px"
				/>
			) : (
				<span className="font-mono font-bold leading-none" style={{ fontSize: "calc(1em * 0.4)" }}>
					{name?.[0]?.toUpperCase() || "?"}
				</span>
			)}
		</div>
	);
};
