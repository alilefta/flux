import { useEffect, useState } from "react";

export const useOrigin = () => {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	const origin = typeof window !== "undefined" && window.location.origin ? window.location.origin : "";

	if (!mounted) {
		return "";
	}

	return origin;
};

// import { useSyncExternalStore } from "react";

// export const useOrigin = () => {
//   const origin = useSyncExternalStore(
//     () => () => {}, // subscribe (no-op because window.location doesn't change)
//     () => typeof window !== "undefined" && window.location.origin ? window.location.origin : "", // client
//     () => "" // server
//   );

//   return origin;
// };
