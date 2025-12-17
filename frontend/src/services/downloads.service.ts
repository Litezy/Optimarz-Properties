import { handleApiError } from "@/lib/ApiError";
import { ApiResponse, Apis, AuthGetApi, PostApi } from "./Apis.service";

export class DownloadsService {
    async createDownload(formdata: Record<string, any>) {
        try {
            const response: ApiResponse = await PostApi(Apis.downloads.create, formdata)
            if (response.status === 'success' && !response.error) {
                return {
                    message: response.message,
                    status: response.status
                }
            }
            throw new Error(response.message || 'Failed to create download');
        } catch (error) {
            throw handleApiError(error)
        }
    }

    async fetchDownloads() {
        try {
            const response: ApiResponse = await AuthGetApi(Apis.downloads.fetch_all)
            if (response.status === 'success' && !response.error) {
                return {
                    message: response.message,
                    data: response.data,
                    status: response.statusCode
                }
            }
            throw new Error(response.message || 'Failed to fetch downloads');
        } catch (error) {
            throw handleApiError(error)
        }
    }
}

export const downloadsService = new DownloadsService()
