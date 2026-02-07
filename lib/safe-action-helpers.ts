import { DEFAULT_SERVER_ERROR_MESSAGE } from "next-safe-action";
import { useAction } from "next-safe-action/hooks";
import { toast } from "sonner";

export const VALIDATION_ERROR_MESSAGE = "An error occured while validating your input.";
export const DATABASE_ERROR_MESSAGE = "An error occured with our database.";

export const onActionError: NonNullable<Parameters<typeof useAction>[1]>["onError"] = ({ error, input }) => {
	if (error.validationErrors) {
		toast.error(VALIDATION_ERROR_MESSAGE);
	} else if (error.serverError && typeof error.serverError === "string") {
		toast.error(error.serverError);
	} else {
		toast.error(DEFAULT_SERVER_ERROR_MESSAGE);
	}
};
