import { ErrorMessage } from "@/lib/utils";

interface ValidationError {
    field: string;
    message: string;
}

interface ApiErrorResponse {
    status?: string;
    code?: string;
    message?: string;
    error?: string;
    errors?: ValidationError[];
}

export const handleApiError = (error: unknown, showToast = true) => {
    let message = "An unexpected error occurred. Please try again.";

    try {
        if (typeof error === "object" && error !== null) {
            const err = error as any;

            // Axios-style error (server responded with an error)
            if (err.response?.data) {
                const errorData: ApiErrorResponse = err.response.data;

                // Handle structured validation errors
                if (errorData.errors && Array.isArray(errorData.errors) && errorData.errors.length > 0) {
                    const validationErrors = errorData.errors
                        .filter((e): e is ValidationError =>
                            e !== null &&
                            e !== undefined &&
                            typeof e === 'object' &&
                            'message' in e &&
                            typeof e.message === 'string'
                        )
                        .map((e) => e.message);

                    if (validationErrors.length > 0) {
                        if (validationErrors.length === 1) {
                            message = validationErrors[0] || 'Unknown validation error';
                        } else {
                            message = `Errors:\n${validationErrors.join('\n')}`;

                        }
                    } else {
                        message = errorData.message || errorData.error || "Validation failed. Please check your input.";
                    }
                }
                // Handle single error message
                else {
                    message = errorData.message || errorData.error || "Server responded with an error.";
                }
            }
            // Network error (no response)
            else if (err.request) {
                message = "Network error. Please check your internet connection.";
            }
            // General JS error (runtime)
            else if (err.message && typeof err.message === 'string') {
                message = err.message;
            }
        } else if (typeof error === 'string') {
            message = error;
        }
    } catch (parseError) {
        console.error('Error parsing API error:', parseError);
        message = "An unexpected error occurred. Please try again.";
    }

    // Log for debugging
    console.error('API Error:', message);

    // Optional Sonner toast alert
    if (showToast) {
        ErrorMessage(message);
    }

    // throw new Error(message)
    return {
        status: "error",
        error: true,
        message,
    };
};