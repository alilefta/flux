"use client";

import { useEffect, useState } from "react";
import { CreateServerModal } from "@/components/modals/create-server-modal"; // We will build this next

export const ModalProvider = () => {
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	if (!isMounted) {
		return null;
	}

	return (
		<>
			<CreateServerModal />
			{/* Other modals will go here later */}
		</>
	);
};
