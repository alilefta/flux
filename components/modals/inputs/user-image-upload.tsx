"use client";

import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { useFormContext } from "react-hook-form";
import { Loader2, Camera, User } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { useUploadThing } from "@/utils/uploadthing";

interface UserImageUploadProps {
	name: string;
}

export function UserImageUpload({ name }: UserImageUploadProps) {
	const { setValue, watch } = useFormContext();
	// Watch the form value to show preview instantly
	const imageUrl = watch(name);
	const [isHovered, setIsHovered] = useState(false);

	const { isUploading, startUpload } = useUploadThing("profilePicture", {
		// You can reuse the endpoint or make a new "profilePicture" one
		onClientUploadComplete: (res) => {
			setValue(name, res[0].url, { shouldValidate: true });
			toast.success("Avatar updated");
		},
		onUploadError: (error) => {
			toast.error("Upload failed", { description: error.message });
		},
	});

	const onDrop = useCallback(
		async (acceptedFiles: File[]) => {
			if (acceptedFiles?.length) {
				await startUpload([acceptedFiles[0]]);
			}
		},
		[startUpload],
	);

	const { getRootProps, getInputProps } = useDropzone({
		onDrop,
		accept: { "image/*": [] },
		maxFiles: 1,
		disabled: isUploading,
	});

	return (
		<div className="flex flex-col items-center gap-4">
			<div
				{...getRootProps()}
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
				className={cn("relative h-24 w-24 rounded-full overflow-hidden border-4 border-[#1e1e22] shadow-xl cursor-pointer transition-all group", isUploading && "opacity-50")}
			>
				<input {...getInputProps()} />

				{/* IMAGE LAYER */}
				{imageUrl ? (
					<Image src={imageUrl} alt="Profile" fill className="object-cover" />
				) : (
					<div className="h-full w-full bg-zinc-800 flex items-center justify-center">
						<User className="w-10 h-10 text-zinc-500" />
					</div>
				)}

				{/* HOVER OVERLAY */}
				<div className={cn("absolute inset-0 bg-black/60 flex items-center justify-center transition-opacity duration-200", isHovered && !isUploading ? "opacity-100" : "opacity-0")}>
					<Camera className="w-8 h-8 text-white/80" />
				</div>

				{/* LOADING OVERLAY */}
				{isUploading && (
					<div className="absolute inset-0 bg-black/60 flex items-center justify-center z-20">
						<Loader2 className="w-8 h-8 text-indigo-500 animate-spin" />
					</div>
				)}
			</div>

			<p className="text-xs text-zinc-500 font-medium">Click to change avatar</p>
		</div>
	);
}
