import { handleApiError } from "@/lib/ApiError";
import { ApiResponse, Apis, AuthGetApi, PostApi } from "./Apis.service";

export class WaitListService {
    //waitlist
        async createWaitlist(formdata: Record<string, any>) {
            try {
                const response: ApiResponse = await PostApi(Apis.waitlist.join, formdata)
                if (response.status === 'success' && !response.error) {
                    return {
                        message: response.message,
                        data: response.data
                    }
                }
                throw new Error(response.message || 'Failed to create waitlist');
            } catch (error) {
                throw handleApiError(error)
            }
        }
    
        async fetchWaitlist() {
            try {
                const response: ApiResponse = await AuthGetApi(Apis.waitlist.fetch_wls)
                if (response.status === 'success' && !response.error) {
                    return {
                        message: response.message,
                        data: response.data,
                        status:response.statusCode
                    }
                }
                throw new Error(response.message || 'Failed to fetch waitlist');
            } catch (error) {
                throw handleApiError(error)
            }
        }
}

export const waitlistService = new WaitListService()