"use client";

import { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { useFormContext } from "react-hook-form";
import { FileIcon, Loader2, X, UploadCloud, Image as ImageIcon, CheckCircle2, Film, FileText, AlertCircle, FileCode } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { useUploadThing } from "@/utils/uploadthing"; // Assuming you have a generic 'messageFile' endpoint in UploadThing
import { Progress } from "@/components/ui/progress";

interface FileUploadProps {
	name: string;
}

type FileType = "image" | "pdf" | "video" | "text" | "code" | "unknown";

interface UploadedFile {
	url: string;
	type: FileType;
	name: string;
	size?: number;
	originalFile?: File;
}

export function FileUpload({ name }: FileUploadProps) {
	const { setValue, watch } = useFormContext();
	const fileData: UploadedFile[] = watch(name) || [];

	const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
	const [progress, setProgress] = useState(0);

	// Sync local state with form (in case of reset)
	useEffect(() => {
		if (fileData.length === 0) {
			setUploadedFiles([]);
			setProgress(0);
		}
	}, [fileData.length]);

	// Helper to determine file type
	const getFileType = (fileName: string): FileType => {
		const ext = fileName.split(".").pop()?.toLowerCase() || "";
		if (["jpg", "jpeg", "png", "gif", "webp", "svg"].includes(ext)) return "image";
		if (["pdf"].includes(ext)) return "pdf";
		if (["mp4", "webm", "mov", "avi"].includes(ext)) return "video";
		if (["txt", "md", "json", "csv"].includes(ext)) return "text";
		if (["js", "ts", "tsx", "jsx", "py", "java", "cpp"].includes(ext)) return "code";
		return "unknown";
	};

	const { isUploading, startUpload } = useUploadThing("messageFile", {
		onUploadProgress: (p) => {
			setProgress(p);
		},
		onClientUploadComplete: (res) => {
			// ✅ Merge UploadThing URLs with original file metadata
			const newFiles: UploadedFile[] = res.map((item, index) => {
				// Get original file metadata from pending uploads
				const originalFile = uploadedFiles[uploadedFiles.length - res.length + index];

				return {
					url: item.ufsUrl, // ✅ UploadThing URL
					type: originalFile?.type || getFileType(item.name),
					name: originalFile?.name || item.name,
					size: item.size,
				};
			});

			// Update local state
			const updatedList = [...uploadedFiles, ...newFiles];
			setUploadedFiles(updatedList);

			// ✅ Store complete file objects in form (not just URLs)
			setValue(name, updatedList, { shouldValidate: true });

			setProgress(0);
			toast.success("Upload complete", {
				icon: <CheckCircle2 className="text-emerald-500" size={16} />,
			});
		},
		onUploadError: (error) => {
			setProgress(0);
			console.error(error);
			toast.error("Upload Failed", {
				description: "Some files failed to upload. Please try again.",
				icon: <AlertCircle className="text-red-500" size={16} />,
			});
		},
	});
	const onDrop = useCallback(
		async (acceptedFiles: File[]) => {
			if (acceptedFiles?.length) {
				// ✅ Create pending file objects with metadata BEFORE upload
				const pendingFiles: UploadedFile[] = acceptedFiles.map((file) => ({
					url: "", // Will be filled after upload
					type: getFileType(file.name),
					name: file.name,
					size: file.size,
					originalFile: file,
				}));

				// Add to local state immediately (for preview)
				setUploadedFiles((prev) => [...prev, ...pendingFiles]);

				// Start upload
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
		maxFiles: 10,
		disabled: isUploading,
	});

	const handleRemove = (indexToRemove: number) => {
		const updatedList = uploadedFiles.filter((_, index) => index !== indexToRemove);
		setUploadedFiles(updatedList);
		setValue(name, updatedList, { shouldValidate: true });
	};

	const getFileIcon = (type: FileType) => {
		switch (type) {
			case "pdf":
				return <FileIcon className="h-8 w-8 text-rose-400" />;
			case "video":
				return <Film className="h-8 w-8 text-indigo-400" />;
			case "text":
				return <FileText className="h-8 w-8 text-zinc-300" />;
			case "code":
				return <FileCode className="h-8 w-8 text-emerald-400" />;
			default:
				return <FileIcon className="h-8 w-8 text-zinc-400" />;
		}
	};
	return (
		<div className="space-y-4">
			{/* Upload Progress */}
			{isUploading && (
				<div className="space-y-1 animate-in fade-in slide-in-from-top-2">
					<div className="flex justify-between text-xs text-zinc-400 uppercase font-bold tracking-wider">
						<span>Uploading...</span>
						<span>{progress}%</span>
					</div>
					<Progress value={progress} className="h-1 bg-white/10" />
				</div>
			)}

			{/* Preview Grid */}
			{uploadedFiles.length > 0 && (
				<div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-h-96 overflow-y-auto pr-1">
					{uploadedFiles.map((file, index) => (
						<div key={index} className="relative group aspect-square rounded-xl overflow-hidden border border-white/10 bg-[#1e1e22] hover:border-white/20 transition-all">
							{/* Remove Button */}
							<button
								title="Remove file"
								type="button"
								onClick={(e) => {
									e.stopPropagation();
									handleRemove(index);
								}}
								className="absolute top-1.5 right-1.5 z-20 p-1 rounded-full bg-black/60 text-white/70 hover:text-white hover:bg-rose-500 transition-all opacity-0 group-hover:opacity-100 shadow-sm backdrop-blur-sm"
							>
								<X className="h-3 w-3" />
							</button>

							{/* Content Render */}
							{file.type === "image" ? (
								file.url ? (
									<Image src={file.url} alt={file.name} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
								) : (
									// ✅ Show preview from File object while uploading
									<div className="w-full h-full flex items-center justify-center bg-black/40">
										<Loader2 className="w-6 h-6 animate-spin text-indigo-500" />
									</div>
								)
							) : (
								<div className="h-full w-full flex flex-col items-center justify-center p-3 gap-3 text-center">
									<div className="p-3 bg-black/40 rounded-xl shadow-inner ring-1 ring-white/5">{getFileIcon(file.type)}</div>
									<div className="w-full">
										<p className="text-[10px] font-medium text-zinc-300 w-full truncate leading-tight">{file.name}</p>
										<p className="text-[9px] text-zinc-500 uppercase mt-0.5">{file.type}</p>
									</div>
								</div>
							)}

							{/* File name overlay for images */}
							{file.type === "image" && file.url && (
								<div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2">
									<p className="text-[10px] text-zinc-300 truncate px-1">{file.name}</p>
								</div>
							)}
						</div>
					))}
				</div>
			)}

			{/* Dropzone */}
			<div
				{...getRootProps()}
				className={cn(
					"relative flex flex-col items-center justify-center w-full rounded-2xl border-2 border-dashed transition-all duration-300 cursor-pointer overflow-hidden",
					uploadedFiles.length > 0 ? "h-24 bg-black/20" : "h-48 bg-black/20",
					isDragActive ? "border-indigo-500 bg-indigo-500/10" : "border-white/10 hover:bg-black/30 hover:border-white/20",
					isUploading && "pointer-events-none opacity-50",
				)}
			>
				<input {...getInputProps()} />

				<div className="flex flex-col items-center gap-2 text-zinc-400">
					{isUploading ? (
						<Loader2 className="w-6 h-6 animate-spin text-indigo-500" />
					) : (
						<UploadCloud className={cn("text-zinc-500 transition-all", uploadedFiles.length > 0 ? "w-6 h-6" : "w-10 h-10")} />
					)}

					{!isUploading && (
						<div className="text-center">
							<p className={cn("font-bold text-white transition-all", uploadedFiles.length > 0 ? "text-xs" : "text-sm")}>
								{uploadedFiles.length > 0 ? "Upload more" : "Click to upload"}
							</p>
							{uploadedFiles.length === 0 && <p className="text-xs text-zinc-500 mt-1">Drag & drop up to 10 files</p>}
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
