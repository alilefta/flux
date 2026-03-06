"use client";

import { createContext, useContext } from "react";
import { ProfileBase } from "@/schemas/profile";

// We'll use ProfileBase as the standard identity type
type CurrentProfileContextType = ProfileBase | null;

const CurrentProfileContext = createContext<CurrentProfileContextType>(null);

export const useCurrentProfile = () => {
	const context = useContext(CurrentProfileContext);

	// Only throw on undefined (Developer Error).
	if (context === undefined) {
		throw new Error("useCurrentProfile must be used within a CurrentProfileProvider");
	}
	return context;
};

interface CurrentProfileProviderProps {
	children: React.ReactNode;
	profile: ProfileBase | null; // Passed from Server Component
}

export const CurrentProfileProvider = ({ children, profile }: CurrentProfileProviderProps) => {
	return <CurrentProfileContext.Provider value={profile}>{children}</CurrentProfileContext.Provider>;
};
