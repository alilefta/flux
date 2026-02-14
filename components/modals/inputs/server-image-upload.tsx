"use client";

import { useCallback, useState } from "react";
import { useDropzone, FileRejection } from "react-dropzone";
import { useFormContext, useWatch } from "react-hook-form";
import { UploadCloud, Trash2, Loader2 } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { useUploadThing } from "@/utils/uploadthing"; // Ensure you have this helper
import { Button } from "@/components/ui/button";
import { CreateServerInput, UpdateServerInput } from "@/schemas/composed/server.details";

export function ServerImageUpload() {
	const { setValue, control } = useFormContext<CreateServerInput | UpdateServerInput>();
	const imageUrl = useWatch({ control, name: "imageUrl" });
	const [preview, setPreview] = useState<string | null>(imageUrl);

	// 1. UPLOADTHING LOGIC
	const { isUploading, startUpload } = useUploadThing("serverPicture", {
		onClientUploadComplete: (res) => {
			const url = res[0].ufsUrl;
			setValue("imageUrl", url, { shouldValidate: true });
			toast.success("Image uploaded");
		},
		onUploadError: (error) => {
			setPreview(null); // Reset on fail
			toast.error("Upload failed", { description: error.message });
		},
	});

	const onDrop = useCallback(
		async (acceptedFiles: File[], fileRejections: FileRejection[]) => {
			if (acceptedFiles?.length) {
				const file = acceptedFiles[0];

				// Optimistic Preview
				const objectUrl = URL.createObjectURL(file);
				setPreview(objectUrl);

				// toast.info("INGESTING_ASSET", {
				// 	description: "ESTABLISHING_UPLINK...",
				// });

				// Trigger Upload
				await startUpload([file]);
			}

			if (fileRejections?.length) {
				toast.error("Upload failed", { description: `File rejected due to ${fileRejections[0].errors[0].message}` });
			}
		},
		[startUpload],
	);

	const { getRootProps, getInputProps, isDragActive } = useDropzone({
		onDrop,
		accept: { "image/*": [] },
		maxFiles: 1,
		maxSize: 4 * 1024 * 1024, // 4MB
	});

	const handleRemove = (e: React.MouseEvent) => {
		e.stopPropagation();
		setPreview(null);
		setValue("imageUrl", "", { shouldValidate: true });
	};

	return (
		<div className="flex flex-col items-center gap-4">
			{/* <div className="flex justify-between items-end">
				<label className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">Server_Icon</label>
				{isUploading && <span className="text-[10px] font-mono text-primary animate-pulse">SYNCING...</span>}
			</div> */}

			<div
				{...getRootProps()}
				className={cn(
					"relative flex flex-col items-center justify-center w-64 h-64 rounded-2xl border-2 border-dashed transition-all duration-300 cursor-pointer overflow-hidden",
					isDragActive ? "border-indigo-500 bg-indigo-500/10" : "border-zinc-700 bg-zinc-900/50 hover:border-zinc-500 hover:bg-zinc-800",
					preview && "border-none bg-transparent",
				)}
			>
				<input {...getInputProps()} />

				{preview ? (
					<>
						<Image src={preview} alt="Server Icon" fill className="object-cover" />

						{/* Remove Button Overlay */}
						<div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
							<Button size="icon" variant="destructive" onClick={handleRemove} className="rounded-full w-8 h-8">
								<Trash2 size={14} />
							</Button>
						</div>
					</>
				) : (
					<div className="flex flex-col items-center gap-2 text-zinc-500 group-hover:text-zinc-300">
						<div className="p-3 bg-white/5 rounded-full ring-1 ring-white/10 group-hover:ring-primary/50 transition-all">
							<UploadCloud size={20} className="group-hover:text-primary transition-colors" />
						</div>
						<span className="text-[10px] font-bold uppercase tracking-widest">Upload</span>
					</div>
				)}

				{/* Loading Overlay */}
				{isUploading && (
					<div className="absolute inset-0 flex items-center justify-center">
						<Loader2 className="w-8 h-8 text-primary animate-spin" />
					</div>
				)}
			</div>
			<p className="text-xs text-zinc-500 font-medium">Server Icon (Recommended). 4MB Max image size</p>
		</div>
	);
}
