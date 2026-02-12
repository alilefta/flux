import { useState } from "react";

export const useOrigin = () => {
	const [origin] = useState(() => (typeof window !== "undefined" ? window.location.origin : ""));
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
