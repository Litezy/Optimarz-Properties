import { handleApiError } from "@/lib/ApiError";
import { ApiResponse, Apis, AuthPostApi, AuthPutApi, GetApi } from "./Apis.service";

export class BlogService {


    async createBlog(formdata: Record<string, any>) {
        try {
            const response: ApiResponse = await AuthPostApi(Apis.blogs.create_blog, formdata)
            if (response.status === 'success' && !response.error) {
                return {
                    message: response.message,
                    data: response.data
                }
            }
            throw new Error(response.message || 'failed to fetch blogs');
        } catch (error) {
            throw handleApiError(error)
        }
    }


    async updateBlog(id: number) {
        try {
            const response: ApiResponse = await AuthPutApi(`${Apis.blogs.update_blog}/${id}`)
            if (response.status === 'success' && !response.error) {
                return {
                    message: response.message,
                }
            }
            throw new Error(response.message || 'failed to pdate blog');
        } catch (error) {
            throw handleApiError(error)
        }
    }



    async fetchBlogs() {
        try {
            const response: ApiResponse = await GetApi(Apis.blogs.fetch_all_blogs)
            if (response.status === 'success' && !response.error) {
                return {
                    message: response.message,
                    data: response.data,
                    status:response.statusCode
                }
            }
            throw new Error(response.message || 'failed to fetch blogs');
        } catch (error) {
            throw handleApiError(error)
        }
    }


    async fetchSingleBlog(id: number) {
        try {
            const response: ApiResponse = await GetApi(`${Apis.blogs.fetch_single_blog}/${id}`)
            if (response.status === 'success' && !response.error) {
                return {
                    message: response.message,
                    data: response.data
                }
            }
            throw new Error(response.message || 'failed to fetch blogs');
        } catch (error) {
            throw handleApiError(error)
        }
    }

    async fetchByCaegory(category: string) {
        try {
            const response: ApiResponse = await AuthPutApi(`${Apis.blogs.fetch_by_category}/${category}`)
            if (response.status === 'success' && !response.error) {
                return {
                    message: response.message,
                }
            }
            throw new Error(response.message || 'failed to fetch blog by category');
        } catch (error) {
            throw handleApiError(error)
        }
    }

    async deleteBlog(id: number) {
        try {
            const response: ApiResponse = await GetApi(`${Apis.blogs.delete_blog}/${id}`)
            if (response.status === 'success' && !response.error) {
                return {
                    message: response.message,
                }
            }
            throw new Error(response.message || 'failed to delete blog');
        } catch (error) {
            throw handleApiError(error)
        }
    }
}
export const blogService = new BlogService()