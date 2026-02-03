import { cn } from "@/lib/utils";
import Image from "next/image";

interface UserAvatarProps {
	src?: string;
	className?: string;
	name?: string; // fallback name
}

export const UserAvatar = ({ src, className, name }: UserAvatarProps) => {
	return (
		<div className={cn("h-7 w-7 md:h-10 md:w-10 relative rounded-full overflow-hidden border border-white/10 bg-zinc-800 flex items-center justify-center", className)}>
			{src ? <Image fill src={src} alt="Avatar" className="object-cover" /> : <span className="text-xs font-mono text-zinc-400">{name?.[0]?.toUpperCase() || "?"}</span>}
		</div>
	);
};
