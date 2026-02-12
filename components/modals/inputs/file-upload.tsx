"use client";

import { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { useFormContext } from "react-hook-form";
import { FileIcon, Loader2, X, UploadCloud, Image as ImageIcon, CheckCircle2, Film, FileText } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { useUploadThing } from "@/utils/uploadthing"; // Assuming you have a generic 'messageFile' endpoint in UploadThing

interface FileUploadProps {
	name: string;
}

type FileType = "image" | "pdf" | "video" | "text" | "unknown";

interface UploadedFile {
	url: string;
	type: FileType;
	name: string;
}

export function FileUpload({ name }: FileUploadProps) {
	const { setValue, watch } = useFormContext();
	const fileUrls: string[] = watch(name) || [];
	const [fileType, setFileType] = useState<"image" | "pdf" | null>(null);
	const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);

	// Sync local state if form is cleared externally
	useEffect(() => {
		if (fileUrls.length === 0) {
			setUploadedFiles([]);
		}
	}, [fileUrls.length]);

	const { isUploading, startUpload } = useUploadThing("messageFile", {
		onClientUploadComplete: (res) => {
			// 1. Construct new file objects
			const newFiles = res.map((item) => {
				const type = getFileType(item.name);
				return { url: item.ufsUrl, type, name: item.name };
			});

			// 2. Update Local State
			const updatedList = [...uploadedFiles, ...newFiles];
			setUploadedFiles(updatedList);

			// 3. Update Form State (Just URLs)
			setValue(
				name,
				updatedList.map((f) => f.url),
				{ shouldValidate: true },
			);

			toast.success("Upload complete", {
				icon: <CheckCircle2 className="text-emerald-500" size={16} />,
			});
		},
		onUploadError: (error) => {
			toast.error("Upload failed", { description: error.message });
		},
		onUploadProgress: (p) => {
			//
		},
	});

	const onDrop = useCallback(
		async (acceptedFiles: File[]) => {
			if (acceptedFiles?.length) {
				await startUpload(acceptedFiles);
			}
		},
		[startUpload],
	);

	const { getRootProps, getInputProps, isDragActive } = useDropzone({
		onDrop,
		accept: {
			"image/*": [],
			"application/pdf": [],
			"video/*": [],
			"text/*": [],
		},
		disabled: isUploading,
	});

	const handleRemove = (urlToRemove: string) => {
		const updatedList = uploadedFiles.filter((f) => f.url !== urlToRemove);
		setUploadedFiles(updatedList);
		setValue(
			name,
			updatedList.map((f) => f.url),
			{ shouldValidate: true },
		);
	};

	// Helper to determine icon
	const getFileType = (fileName: string): FileType => {
		const ext = fileName.split(".").pop()?.toLowerCase();
		if (["jpg", "jpeg", "png", "gif", "webp"].includes(ext!)) return "image";
		if (["pdf"].includes(ext!)) return "pdf";
		if (["mp4", "webm", "mov"].includes(ext!)) return "video";
		if (["txt", "md", "json"].includes(ext!)) return "text";
		return "unknown";
	};

	const getFileIcon = (type: FileType) => {
		switch (type) {
			case "pdf":
				return <FileIcon className="h-6 w-6 text-rose-400" />;
			case "video":
				return <Film className="h-6 w-6 text-indigo-400" />;
			case "text":
				return <FileText className="h-6 w-6 text-zinc-400" />;
			default:
				return <FileIcon className="h-6 w-6 text-zinc-400" />;
		}
	};

	return (
		<div className="space-y-4">
			{/* 1. PREVIEW GRID */}
			{uploadedFiles.length > 0 && (
				<div className="grid grid-cols-2 gap-3 max-h-[300px] overflow-y-auto custom-scrollbar pr-2">
					{uploadedFiles.map((file, idx) => (
						<div key={file.url} className="relative group rounded-xl overflow-hidden border border-white/10 bg-black/40">
							{/* Remove Button */}
							<button
								title="Remove File"
								type="button"
								onClick={(e) => {
									e.stopPropagation();
									handleRemove(file.url);
								}}
								className="absolute top-2 right-2 z-20 p-1.5 rounded-full bg-black/60 text-white hover:bg-rose-500 transition-colors shadow-lg opacity-0 group-hover:opacity-100"
							>
								<X className="h-3 w-3" />
							</button>

							{/* Content Render */}
							{file.type === "image" ? (
								<div className="relative h-32 w-full">
									<Image src={file.url} alt={file.name} fill className="object-cover" />
								</div>
							) : (
								<div className="h-32 w-full flex flex-col items-center justify-center p-4 gap-2 text-center">
									<div className="p-3 bg-white/5 rounded-full">{getFileIcon(file.type)}</div>
									<p className="text-xs text-zinc-300 w-full truncate px-2">{file.name}</p>
								</div>
							)}
						</div>
					))}
				</div>
			)}

			{/* 2. DROPZONE (Mini version if files exist) */}
			<div
				{...getRootProps()}
				className={cn(
					"relative flex flex-col items-center justify-center w-full rounded-2xl border-2 border-dashed transition-all duration-300 cursor-pointer overflow-hidden",
					uploadedFiles.length > 0 ? "h-24" : "h-52",
					isDragActive ? "border-indigo-500 bg-indigo-500/10" : "border-white/10 bg-black/20 hover:bg-black/30 hover:border-white/20",
				)}
			>
				<input {...getInputProps()} />

				<div className="flex flex-col items-center gap-2 text-zinc-400">
					{isUploading ? <Loader2 className="w-6 h-6 animate-spin text-indigo-500" /> : <UploadCloud className={cn("text-zinc-500", uploadedFiles.length > 0 ? "w-6 h-6" : "w-10 h-10")} />}

					{!isUploading && (
						<div className="text-center">
							<p className={cn("font-bold text-white", uploadedFiles.length > 0 ? "text-xs" : "text-sm")}>{uploadedFiles.length > 0 ? "Add more files" : "Click to upload"}</p>
							{uploadedFiles.length === 0 && <p className="text-xs text-zinc-500 mt-1">Max 5 files per message</p>}
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
