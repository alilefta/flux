"use client";

import { useEffect } from "react";
import { pusherClient } from "@/lib/pusher-client";
import { useNotificationStore } from "@/hooks/use-notification-store";
import { toast } from "sonner";
import { useRouter, usePathname } from "next/navigation";
import { UserAvatar } from "@/components/user/user-avatar";
import { DirectMessageNotification } from "@/schemas/composed/conversation.details";

interface NavigationNotificationsProps {
	profileId: string;
}

export const NavigationNotifications = ({ profileId }: NavigationNotificationsProps) => {
	const addUnread = useNotificationStore((state) => state.addUnread);
	const router = useRouter();
	const pathname = usePathname();

	useEffect(() => {
		const channelName = `user-${profileId}`;
		const channel = pusherClient.subscribe(channelName);

		channel.bind("notification:new", (data: DirectMessageNotification) => {
			// 1. If we are currently looking at this conversation, ignore the notification
			if (pathname === `/conversations/${data.conversationId}`) {
				return;
			}

			// 2. Update Store (Red Dot)
			addUnread(data.conversationId);

			// 3. Play Sound (Optional)
			// const audio = new Audio("/notification.mp3");
			// audio.play().catch(() => {});

			// 4. Show Interactive Toast
			toast.custom(
				(t) => (
					<div
						onClick={() => {
							router.push(`/conversations/${data.conversationId}`);
							toast.dismiss(t);
						}}
						className="flex items-center gap-3 w-full bg-[#1e1e22] border border-white/10 p-3 rounded-xl shadow-2xl cursor-pointer hover:bg-white/5 transition"
					>
						<UserAvatar src={data.senderImage} />
						<div className="flex flex-col overflow-hidden min-w-0">
							<span className="text-sm font-bold text-white truncate">{data.senderName}</span>
							<span className="text-xs text-zinc-400 truncate">{data.content}</span>
						</div>
					</div>
				),
				{ duration: 4000 },
			);
		});

		return () => {
			pusherClient.unsubscribe(channelName);
		};
	}, [profileId, pathname, router, addUnread]);

	return null;
};
