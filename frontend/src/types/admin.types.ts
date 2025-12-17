// types/admin.types.ts

export interface AdminProfile {
    id: number;
    email: string;
    fullname: string;
    role: string;
    createdAt?: string;
    updatedAt?: string;
}

export interface ClientMessage {
    id: number;
    email: string;
    name: string;
    message: string;
    createdAt: string;
}

export interface BlogAuthor {
    id: number;
    email: string;
    fullname: string;
}

export interface Blog {
    id: number;
    title: string;
    content: string;
    featuredImage: string;
    slug: string;
    category: string;
    readingTime: string;
    description: string;
    authorId: number;
    createdAt: string;
    updatedAt: string;
    author: BlogAuthor;
}

export interface WaitlistEntry {
    id: number;
    email: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    createdAt: string;
}

export interface DownloadEntry {
    id: number;
    email: string;
    firstName: string;
    lastName: string;
    createdAt: string;
}