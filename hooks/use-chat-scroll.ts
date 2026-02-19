import React, { useState, useLayoutEffect, RefObject, useCallback } from "react";

interface UseChatScrollProps {
	chatRef: RefObject<HTMLDivElement | null>;
	bottomRef: RefObject<HTMLDivElement | null>;
	shouldLoadMore: boolean;
	loadMoreRef: RefObject<HTMLDivElement | null>;
	count: number;
}

export const useChatScroll = ({ chatRef, bottomRef, shouldLoadMore, loadMoreRef, count }: UseChatScrollProps) => {
	const prevScrollHeightRef = React.useRef(0);
	const [hasInitialized, setHasInitialized] = useState(false);

	console.log("useChatScroll requested!");

	// 1. Initial Scroll (Instant)
	useLayoutEffect(() => {
		const chatDiv = chatRef.current;
		const bottomDiv = bottomRef.current;

		if (chatDiv && bottomDiv && !hasInitialized && count > 0) {
			bottomDiv.scrollIntoView({ behavior: "auto" });
			setHasInitialized(true);
		}
	}, [count, chatRef, bottomRef]);

	// 2. Inverse Scroll (Maintain position when loading history)
	useLayoutEffect(() => {
		const chatDiv = chatRef.current;
		const topDiv = loadMoreRef.current;

		if (shouldLoadMore && chatDiv) {
			prevScrollHeightRef.current = chatDiv.scrollHeight;
		} else if (!shouldLoadMore && chatDiv && prevScrollHeightRef.current > 0) {
			const newScrollHeight = chatDiv.scrollHeight;
			const heightDifference = newScrollHeight - prevScrollHeightRef.current;
			chatDiv.scrollTop = chatDiv.scrollTop + heightDifference;
			prevScrollHeightRef.current = 0;
		}
	}, [shouldLoadMore, chatRef, loadMoreRef]);

	// 3. Helper: Check if user is at bottom LIVE (No stale state)
	const checkIfAtBottom = () => {
		const chatDiv = chatRef.current;
		if (!chatDiv) return false;

		const { scrollTop, scrollHeight, clientHeight } = chatDiv;
		const distanceFromBottom = scrollHeight - scrollTop - clientHeight;

		// Strict threshold: 100px
		return distanceFromBottom <= 100;
	};

	// 4. Helper: Auto-scroll ONLY if already at bottom
	// ✅ STABILIZE CALLBACK
	const scrollToBottom = useCallback(() => {
		const chatDiv = chatRef.current;
		if (!chatDiv) return false;

		const { scrollTop, scrollHeight, clientHeight } = chatDiv;
		const distanceFromBottom = scrollHeight - scrollTop - clientHeight;
		const isAtBottom = distanceFromBottom <= 100;

		if (isAtBottom && bottomRef.current) {
			setTimeout(() => {
				bottomRef.current?.scrollIntoView({ behavior: "smooth" });
			}, 100);
			return true;
		}
		return false;
	}, [chatRef, bottomRef]); // Only recreate if refs change (rare)
	return {
		scrollToBottom,
	};
};
