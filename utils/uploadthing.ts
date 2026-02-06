import { generateReactHelpers, generateUploadButton, generateUploadDropzone } from "@uploadthing/react";

import type { FluxUploadRouter } from "@/app/api/uploadthing/core";

export const UploadButton = generateUploadButton<FluxUploadRouter>();
export const UploadDropzone = generateUploadDropzone<FluxUploadRouter>();
export const { useUploadThing } = generateReactHelpers<FluxUploadRouter>();
