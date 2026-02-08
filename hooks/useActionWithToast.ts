// /hooks/use-action-toast.ts
"use client";

import { FlattenedValidationErrors, InferSafeActionFnResult, InferServerError } from "next-safe-action";
import { InferUseActionHookReturn, useAction, UseActionHookReturn } from "next-safe-action/hooks";
import { toast } from "sonner";

type UseActionToastOptions = {
	successMessage?: string;
	onSuccess?: (data: any) => void;
	onError?: (error: any) => void;
};

export function useActionWithToast<T extends (...args: any[]) => any>(action: T, options?: UseActionToastOptions) {
	return useAction(action, {
		onSuccess: ({ data }) => {
			if (options?.successMessage) {
				toast.success(options.successMessage);
			}
			options?.onSuccess?.(data);
		},
		onError: ({ error }) => {
			// Handle validation errors
			if (error.validationErrors) {
				const firstError = Object.values(error.validationErrors)[0]?.[0];
				toast.error(firstError || "Invalid input");
				return;
			}

			// Handle server errors
			if (error.serverError) {
				toast.error(error.serverError);
			} else {
				toast.error("Something went wrong");
			}

			options?.onError?.(error);
		},
	});
}
