
import { ADMIN_AUTH_COOKIE } from "@/utils/cookies";
import axios from "axios";
import Cookies from "js-cookie";
import { adminUrls, blogUrls, contactUrls, downloadsUrls, waitlistUrls } from "./Apis";

// /home/u530686180/domains/optimarzproperties.com/public_html

let BASEURL = window.origin.includes(`localhost`) ? import.meta.env.VITE_BASE_URL : import.meta.env.VITE_API_URL;
// console.log('BASEURL:', BASEURL);


export const Apis = {
    admin: adminUrls,
    contact: contactUrls,
    blogs: blogUrls,
    waitlist: waitlistUrls,
    downloads: downloadsUrls
};


// Base API response structure
export interface ApiResponse<T = any> {
    status: 'success' | 'error';
    error: boolean;
    statusCode: number;
    message: string;
    data: T;
}
// ---------------- GENERIC REQUESTS ----------------

// Generic GET
export const GetApi = async <T = any>(endpoint: string): Promise<T> => {
    const response = await axios.get(`${BASEURL}/${endpoint}`, {
        headers: { "Content-Type": "application/json" },
    });
    return response.data;
};

// Generic POST
export const PostApi = async <T = any>(endpoint: string, data: any): Promise<T> => {
    const response = await axios.post(`${BASEURL}/${endpoint}`, data, {
        headers: { "Content-Type": "application/json" },
    });
    return response.data;
};


// Generic PUT
export const PutApi = async <T = any>(endpoint: string, data: any): Promise<T> => {
    const response = await axios.put(`${BASEURL}/${endpoint}`, data, {
        headers: { ...authHeader(), "Content-Type": "application/json" },
    });
    return response.data;
};

// ---------------- AUTH REQUESTS ----------------
const authHeader = () => {
    const token = Cookies.get(ADMIN_AUTH_COOKIE);
    return { Authorization: `Bearer ${token}` };
};

export const AuthGetApi = async <T = any>(endpoint: string): Promise<T> => {
    const response = await axios.get(`${BASEURL}/${endpoint}`, {
        headers: { ...authHeader(), "Content-Type": "application/json" },
    });

    return response.data;
};

export const AuthPostApi = async <T = any>(
    endpoint: string,
    data?: any
): Promise<T> => {
    const response = await axios.post(`${BASEURL}/${endpoint}`, data, {
        headers: { ...authHeader(), "Content-Type": "application/json" },
    });

    return response.data;
};


export const AuthPatchApi = async <T = any>(
    endpoint: string,
    data?: any
): Promise<T> => {
    const response = await axios.patch(`${BASEURL}/${endpoint}`, data, {
        headers: { ...authHeader(), "Content-Type": "application/json" },
    });

    return response.data;
};

export const AuthPutApi = async <T = any>(
    endpoint: string,
    data?: any
): Promise<T> => {
    const response = await axios.put(`${BASEURL}/${endpoint}`, data, {
        headers: { ...authHeader(), "Content-Type": "application/json" },
    });


    return response.data;
};

export const AuthDeleteApi = async <T = any>(endpoint: string): Promise<T> => {
    const response = await axios.delete(`${BASEURL}/${endpoint}`, {
        headers: { ...authHeader(), "Content-Type": "application/json" },
    });

    return response.data;
};


export const AuthFormDataPostApi = async <T = any>(
    endpoint: string,
    data: any
): Promise<T> => {
    const response = await axios.post(`${BASEURL}/${endpoint}`, data, {
        headers: { ...authHeader(), "Content-Type": "multipart/form-data" },
    });

    return response.data;
};


export const AuthFormDataPatchtApi = async <T = any>(
    endpoint: string,
    data: any
): Promise<T> => {
    const response = await axios.patch(`${BASEURL}/${endpoint}`, data, {
        headers: { ...authHeader() },
    });


    return response.data;
};

export const AuthFormDataPutApi = async <T = any>(
    endpoint: string,
    data: any
): Promise<T> => {
    const response = await axios.put(`${BASEURL}/${endpoint}`, data, {
        headers: { ...authHeader() },
    });

    return response.data;
};

// export interface tokensInterface {
//     accessToken: string
//     refreshToken: string
// }



