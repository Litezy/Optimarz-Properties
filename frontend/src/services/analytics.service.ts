import { handleApiError } from "@/lib/ApiError";
import { SiteVisitStats } from "@/types/admin.types";
import { ApiResponse, Apis, AuthGetApi } from "./Apis.service";

export class AnalyticsService {
    async fetchVisitStats() {
        try {
            const response: ApiResponse<SiteVisitStats> = await AuthGetApi(Apis.analytics.fetch_stats)
            if (response.status === 'success' && !response.error) {
                return {
                    message: response.message,
                    data: response.data,
                    status: response.statusCode
                }
            }
            throw new Error(response.message || 'Failed to fetch visit stats');
        } catch (error) {
            throw handleApiError(error)
        }
    }
}

export const analyticsService = new AnalyticsService()
