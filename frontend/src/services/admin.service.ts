import { handleApiError } from "@/lib/ApiError"
import { ApiResponse, Apis, AuthPatchApi, GetApi, PostApi } from "./Apis.service"

export interface adminprops {
    id: number;
    email: string;
    fullname: string;
    role: string;
}

// Login specific data
interface LoginData {
    access_token: string;
    refresh_token: string;
    admin: adminprops
}

export class AdminService {
    async loginAdmin(formdata: { email: string; password: string }) {
        try {
            const response: ApiResponse<LoginData> = await PostApi(Apis.admin.login, formdata);
            if (response.status === 'success' && !response.error) {
                return {
                    access_token: response.data.access_token,
                    refresh_token: response.data.refresh_token,
                    message: response.message,
                    admin: response.data.admin
                };
            }

            throw new Error(response.message || 'Login failed');

        } catch (error) {
            throw handleApiError(error);
        }
    }



    async fetchAdminProfile(email: string) {
        try {
            const response: ApiResponse = await GetApi(`${Apis.admin.fetch_single_admin}/${email}`);
            if (response.status === 'success' && !response.error) {
                return {
                    message: response.message,
                    admin: response.data,
                };
            }

            throw new Error(response.message || 'Login failed');

        } catch (error) {
            throw handleApiError(error);
        }
    }


    async updateAdminProfile(formdata: Record<string, any>) {
        try {
            const response: ApiResponse = await AuthPatchApi(`${Apis.admin.update}`,formdata);
            if (response.status === 'success' && !response.error) {
                return {
                    message: response.message,
                    admin: response.data.admin,
                    status: response.status
                };
            }
            throw new Error(response.message || 'Login failed');

        } catch (error) {
            throw handleApiError(error);
        }
    }




}

export const adminService = new AdminService()