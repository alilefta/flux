"use client";

import { useCallback, useState } from "react";
import { useDropzone, FileRejection } from "react-dropzone";
import { Control, Controller, useFormContext } from "react-hook-form";
import { UploadCloud, Trash2, Loader2, Image as ImageIcon } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { useUploadThing } from "@/utils/uploadthing"; // Ensure you have this helper
import { Button } from "@/components/ui/button";

interface ServerImageUploadProps {
	control: Control<any>;
	name: string;
}

export function ServerImageUpload({ control, name }: ServerImageUploadProps) {
	const { setValue, watch } = useFormContext();
	const [preview, setPreview] = useState<string | null>(watch(name));

	// 1. UPLOADTHING LOGIC
	const { isUploading, startUpload } = useUploadThing("serverImage", {
		onClientUploadComplete: (res) => {
			const url = res[0].url;
			setValue(name, url, { shouldValidate: true });
			toast.success("UPLOAD_COMPLETE", {
				description: "ASSET_SECURED_ON_EDGE",
			});
		},
		onUploadError: (error) => {
			setPreview(null); // Reset on fail
			toast.error("UPLOAD_FAILED", {
				description: error.message.toUpperCase(),
			});
		},
	});

	// 2. INGEST LOGIC
	const onDrop = useCallback(
		async (acceptedFiles: File[], fileRejections: FileRejection[]) => {
			if (acceptedFiles?.length) {
				const file = acceptedFiles[0];

				// Optimistic Preview
				const objectUrl = URL.createObjectURL(file);
				setPreview(objectUrl);

				toast.info("INGESTING_ASSET", {
					description: "ESTABLISHING_UPLINK...",
				});

				// Trigger Upload
				await startUpload([file]);
			}

			if (fileRejections?.length) {
				toast.error("INVALID_ASSET", {
					description: "MAX_SIZE_4MB // PNG_JPG_ONLY",
				});
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
		setValue(name, "", { shouldValidate: true });
	};

	return (
		<div className="space-y-4">
			<div className="flex justify-between items-end">
				<label className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">Server_Icon</label>
				{isUploading && <span className="text-[10px] font-mono text-primary animate-pulse">SYNCING...</span>}
			</div>

			<div
				{...getRootProps()}
				className={cn(
					"relative group flex flex-col items-center justify-center w-full h-32 rounded-xl border-2 border-dashed transition-all duration-300 cursor-pointer overflow-hidden",
					isDragActive ? "border-primary bg-primary/5" : "border-white/10 bg-black/20 hover:border-white/20",
					preview && "border-none",
				)}
			>
				<input {...getInputProps()} />

				{preview ? (
					<>
						<Image src={preview} alt="Preview" fill className={cn("object-cover", isUploading && "opacity-50 blur-sm grayscale")} />

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
						<p className="text-[10px] font-black uppercase tracking-widest">Drop_To_Ingest</p>
					</div>
				)}

				{/* Loading Overlay */}
				{isUploading && (
					<div className="absolute inset-0 flex items-center justify-center">
						<Loader2 className="w-8 h-8 text-primary animate-spin" />
					</div>
				)}
			</div>
		</div>
	);
}
