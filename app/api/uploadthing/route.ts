import { createRouteHandler } from "uploadthing/next";

import { fluxUploadRouter } from "@/app/api/uploadthing/core";

// Export routes for Next App Router
export const { GET, POST } = createRouteHandler({
	router: fluxUploadRouter,

	// Apply an (optional) custom config:
	// config: { ... },
});
