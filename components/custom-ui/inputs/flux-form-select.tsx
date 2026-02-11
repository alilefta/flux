"use client";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FieldPath, FieldValues, Controller, Control, PathValue } from "react-hook-form";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { cx } from "class-variance-authority";
import { LucideIcon } from "lucide-react";

export interface SelectOption {
	label: string;
	value: string;
	icon?: LucideIcon;
}

interface FluxSelectProps<S extends FieldValues> {
	control: Control<S>;
	nameInSchema: FieldPath<S>;
	fieldTitle: string;
	options: SelectOption[];
	placeholder?: string;
	containerClassName?: string;
}

export function FluxFormSelect<S extends FieldValues>({ control, nameInSchema, fieldTitle, options, placeholder, containerClassName }: FluxSelectProps<S>) {
	return (
		<Field className={cx("space-y-1.5", containerClassName)}>
			<FieldLabel className="text-xs font-bold uppercase tracking-wider text-zinc-500 ml-1">{fieldTitle}</FieldLabel>

			<Controller
				control={control}
				name={nameInSchema}
				render={({ field, fieldState }) => (
					<div className="relative group">
						<Select onValueChange={field.onChange} defaultValue={field.value as string} value={field.value as string}>
							<SelectTrigger
								className={cx(
									"w-full h-11 bg-black/20 border-white/10 rounded-xl text-sm text-white transition-all duration-200",
									"focus:ring-2 focus:ring-primary/20 focus:border-primary/50 focus:ring-offset-0 focus:outline-none",
									"hover:bg-white/5 hover:border-white/20",
									!field.value && "text-zinc-500",
									fieldState.invalid && "border-red-500/50",
								)}
							>
								<SelectValue placeholder={placeholder} />
							</SelectTrigger>

							{/* FLUX GLASS DROPDOWN */}
							<SelectContent className="bg-[#141417]/95 backdrop-blur-xl border-white/10 rounded-xl shadow-2xl z-50">
								{options.map((opt) => (
									<SelectItem
										key={opt.value}
										value={opt.value}
										className="text-sm py-2.5 px-3 focus:bg-primary/10 focus:text-primary cursor-pointer rounded-lg mx-1 my-0.5 transition-colors text-zinc-300"
									>
										<div className="flex items-center gap-2">
											{opt.icon && <opt.icon className="w-4 h-4 text-zinc-400 group-hover:text-primary opacity-70" />}
											<span>{opt.label}</span>
										</div>
									</SelectItem>
								))}
							</SelectContent>
						</Select>

						{fieldState.error && <FieldError className="text-xs text-red-400 ml-1 mt-1 block animate-in slide-in-from-top-1">{fieldState.error.message}</FieldError>}
					</div>
				)}
			/>
		</Field>
	);
}
