import { handleApiError } from "@/lib/ApiError";
import { ApiResponse, Apis, AuthDeleteApi, AuthGetApi, PostApi } from "./Apis.service";

export class ContactMessage {
    
        // contacts
        async sendContactMessage(formdata: Record<string, any>) {
            try {
                const response: ApiResponse = await PostApi(Apis.contact.send_msg, formdata)
                if (response.status === 'success' && !response.error) {
                    return {
                        message: response.message,
                    }
                }
                throw new Error(response.message || 'Messages fetch failed');
            } catch (error) {
                throw handleApiError(error)
            }
        }
    
        async deleteContactMessage(id: number) {
            try {
                const response: ApiResponse = await AuthDeleteApi(`${Apis.contact.delete_msg}/${id}`)
                if (response.status === 'success' && !response.error) {
                    return {
                        message: response.message,
                    }
                }
                throw new Error(response.message || 'Faileed to delete message');
            } catch (error) {
                throw handleApiError(error)
            }
        }
    
    
        async fetchContactMessages() {
            try {
                const response: ApiResponse = await AuthGetApi(Apis.contact.fetch_msgs)
                if (response.status === 'success' && !response.error) {
                    return {
                        message: response.message,
                        data: response.data,
                        status:response.statusCode
                    }
                }
                throw new Error(response.message || 'Messages fetch failed');
            } catch (error) {
                throw handleApiError(error)
            }
        }
}

export const contactService = new ContactMessage()