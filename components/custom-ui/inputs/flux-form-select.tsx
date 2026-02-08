"use client";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FieldPath, FieldValues, Controller, Control } from "react-hook-form";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { cx } from "class-variance-authority";
import { ChevronDown } from "lucide-react";

interface Option {
	label: string;
	value: string;
}

interface FluxSelectProps<S extends FieldValues> {
	control: Control<S>;
	nameInSchema: FieldPath<S>;
	fieldTitle: string;
	options: Option[];
	placeholder?: string;
	containerClassName?: string;
}

export function FluxFormSelect<S extends FieldValues>({ control, nameInSchema, fieldTitle, options, placeholder, containerClassName }: FluxSelectProps<S>) {
	return (
		<Field className={cx("space-y-1.5", containerClassName)}>
			<FieldLabel className="text-xs font-medium text-zinc-400 ml-1">{fieldTitle}</FieldLabel>

			<Controller
				control={control}
				name={nameInSchema}
				render={({ field, fieldState }) => (
					<Select onValueChange={field.onChange} value={field.value ? String(field.value) : undefined}>
						<SelectTrigger
							className={cx(
								"w-full h-11 bg-black/20 border-white/10 rounded-xl text-sm text-white transition-all duration-200",
								"focus:ring-2 focus:ring-primary/20 focus:border-primary/50 focus:ring-offset-0",
								"hover:bg-white/5 hover:border-white/20",
								!field.value && "text-zinc-500",
							)}
						>
							<SelectValue placeholder={placeholder} />
						</SelectTrigger>

						{/* FLUX GLASS DROPDOWN */}
						<SelectContent className="bg-[#141417]/95 backdrop-blur-xl border-white/10 rounded-xl shadow-2xl z-50 overflow-hidden">
							{options.map((opt) => (
								<SelectItem
									key={opt.value}
									value={opt.value}
									className="text-sm py-2.5 px-3 focus:bg-primary/10 focus:text-primary cursor-pointer rounded-lg mx-1 my-0.5 transition-colors text-zinc-300"
								>
									{opt.label}
								</SelectItem>
							))}
						</SelectContent>

						{fieldState.error && <FieldError className="text-xs text-red-400 ml-1 mt-1">{fieldState.error.message}</FieldError>}
					</Select>
				)}
			/>
		</Field>
	);
}
