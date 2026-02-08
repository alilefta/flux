"use client";

import { format } from "date-fns";
import { ChatItem } from "@/components/chat/chat-item";
import { Activity, Hash, Loader2, Terminal } from "lucide-react";
import { MemberBase, MemberProfile } from "@/schemas/member";
import { useQuery } from "@tanstack/react-query";
import { getMessagesAction } from "@/actions/message";
import { useAction } from "next-safe-action/hooks";
import { InferSafeActionFnResult } from "next-safe-action";
import { toast } from "sonner";
import { useEffect, useRef } from "react";

const DATE_FORMAT = "d MMM yyyy, HH:mm";

interface ChatMessagesProps {
	name: string;
	member: MemberProfile;
	channelId: string;
	serverId: string;
	apiUrl: string;
	socketUrl: string;
	socketQuery: Record<string, string>;
	paramKey: "channelId" | "conversationId";
	paramValue: string;
	type: "channel" | "conversation";
}

type GetMessagesResults = InferSafeActionFnResult<typeof getMessagesAction>;

export const ChatMessages = ({ name, member, apiUrl, socketUrl, socketQuery, paramKey, paramValue, type, channelId, serverId }: ChatMessagesProps) => {
	const chatRef = useRef<HTMLDivElement>(null);
	const bottomRef = useRef<HTMLDivElement>(null);

	const { executeAsync: getMessages } = useAction(getMessagesAction, {
		onSuccess() {},
		onError(e) {
			handleActionError(e.error);
		},
	});

	const handleActionError = (error: { serverError?: GetMessagesResults["serverError"]; validationErrors?: GetMessagesResults["validationErrors"] }) => {
		if (error.validationErrors) {
			toast.error("PROTOCOL_REJECTED", {
				description: "INPUT_INTEGRITY_FAILURE // CHECK_REQUIRED_FIELDS",
				icon: <Activity className="text-red-500" size={16} />,
			});

			console.log(error.validationErrors);
		}
		if (error.serverError) {
			toast.error("SYSTEM_HALT", {
				description: error.serverError.toUpperCase(),
				icon: <Terminal className="text-red-500" size={16} />,
			});
		}
	};

	const { data, isLoading, error } = useQuery({
		queryKey: ["messages", channelId],
		queryFn: async () => {
			const result: GetMessagesResults = await getMessages({ channelId, serverId });
			if (!result?.data?.success) throw new Error(result?.serverError || "Failed");

			return result.data.data.messages || [];
		},
		refetchInterval: 5000, // Temporary polling until Socket.io is ready
	});

	// Auto-scroll to bottom on load and when data changes
	useEffect(() => {
		if (bottomRef.current) {
			bottomRef.current.scrollIntoView({ behavior: "smooth" });
		}
	}, [data]);

	if (isLoading) {
		return (
			<div className="flex-1 flex items-center justify-center">
				<Loader2 className="h-6 w-6 animate-spin text-zinc-500" />
			</div>
		);
	}

	if (error) {
		return <div className="flex-1 flex items-center justify-center text-zinc-500">Failed to load messages. Please refresh.</div>;
	}

	const messages = data || [];

	return (
		<div ref={chatRef} className="flex-1 flex flex-col py-4 overflow-y-auto no-scrollbar">
			{/* 1. Spacer to push messages to bottom if few */}
			<div className="flex-1" />

			{/* 2. Welcome Message */}
			<div className="px-6 pb-6 pt-10">
				<div className="h-16 w-16 rounded-3xl bg-white/10 flex items-center justify-center mb-4 shadow-[0_0_20px_rgba(255,255,255,0.05)]">
					<Hash className="h-8 w-8 text-white" />
				</div>
				<h3 className="text-3xl font-bold text-white tracking-tight">Welcome to #{name}</h3>
				<p className="text-zinc-400 text-base mt-2">
					This is the start of the <span className="text-indigo-400 font-bold">#{name}</span> channel.
				</p>
			</div>
			<div className="w-full h-[1px] bg-white/5 my-2 mx-6" />

			{/* 2. Message List */}
			<div className="flex flex-col mt-auto gap-1 min-w-0 w-full">
				{messages.map((message) => (
					<ChatItem
						key={message.id}
						id={message.id}
						currentMember={member}
						member={message.member}
						content={message.content}
						fileUrl={message.fileUrl}
						deleted={message.deleted}
						timestamp={format(new Date(message.createdAt), DATE_FORMAT)}
						isUpdated={message.updatedAt !== message.createdAt}
						socketUrl=""
						socketQuery={{}}
					/>
				))}
				{/* Invisible div to scroll to */}
				<div ref={bottomRef} />
			</div>
		</div>
	);
};
