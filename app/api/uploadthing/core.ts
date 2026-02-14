import { getCurrentProfile } from "@/data/profile";
import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadedFileData } from "uploadthing/types";
import { UploadThingError } from "uploadthing/server";

const f = createUploadthing();

const auth = async (req: Request) => {
	const profile = await getCurrentProfile();

	if (!profile) {
		throw new UploadThingError("Unauthorized! You must be logged in to upload a file");
	}

	return { profileId: profile.id };
};

type UploadCompleteResults = {
	data: {
		metadata: {
			profileId: string;
		};
		file: UploadedFileData;
	};
	fileRouteName: string;
};

const uploadComplete = ({ data, fileRouteName }: UploadCompleteResults) => {
	const { metadata, file } = data;
	// This code RUNS ON YOUR SERVER after upload
	console.log(`Upload ${fileRouteName} complete for userId:`, metadata.profileId);

	console.log("file url", file.ufsUrl);

	// !!! Whatever is returned here is sent to the clientside `onClientUploadComplete` callback
	return { uploadedBy: metadata.profileId };
};

// FileRouter for your app, can contain multiple FileRoutes
export const fluxUploadRouter = {
	serverPicture: f({
		image: {
			maxFileSize: "4MB",
			maxFileCount: 1,
		},
	})
		.middleware(({ req }) => auth(req))
		.onUploadComplete((data) => uploadComplete({ data, fileRouteName: "Server Avatar Picture" })),

	profilePicture: f({
		image: {
			maxFileSize: "4MB",
			maxFileCount: 1,
		},
	})
		// Set permissions and file types for this FileRoute
		.middleware(async ({ req }) => auth(req))
		.onUploadComplete(async (data) => uploadComplete({ data, fileRouteName: "Profile Picture" })),

	messageFile: f({
		image: { maxFileSize: "8MB", maxFileCount: 5 },
		pdf: { maxFileSize: "8MB", maxFileCount: 5 },
		text: { maxFileSize: "64KB", maxFileCount: 5 }, // Keep text files small
		video: { maxFileSize: "32MB", maxFileCount: 2 },
	})
		.middleware(({ req }) => auth(req))
		.onUploadComplete((data) => uploadComplete({ data, fileRouteName: "Message File Attachement" })),
} satisfies FileRouter;

export type FluxUploadRouter = typeof fluxUploadRouter;
