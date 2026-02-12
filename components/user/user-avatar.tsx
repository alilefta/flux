import { cn } from "@/lib/utils";
import Image from "next/image";

interface UserAvatarProps {
	src?: string;
	className?: string;
	name?: string;
}

export const UserAvatar = ({ src, className, name }: UserAvatarProps) => {
	return (
		<div
			className={cn(
				// Base styles
				"relative shrink-0 overflow-hidden rounded-full border border-white/10 bg-zinc-800 flex items-center justify-center text-zinc-400",
				// Default size (can be overridden by className)
				"h-10 w-10",
				className,
			)}
		>
			{src ? (
				<Image fill src={src} alt={name || "Avatar"} className="object-cover" sizes="(max-width: 768px) 100vw, 150px" />
			) : (
				// Dynamic font size based on container
				<span className="font-mono font-bold leading-none" style={{ fontSize: "calc(1em * 0.4)" }}>
					{name?.[0]?.toUpperCase() || "?"}
				</span>
			)}
		</div>
	);
};
