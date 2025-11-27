import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { Blog } from '@/types/admin.types';

interface BlogsState {
    blogs: Blog[];
    setBlogs: (blogs: Blog[]) => void;
    addBlog: (blog: Blog) => void;
    updateBlog: (id: number, updates: Partial<Blog>) => void;
    deleteBlog: (id: number) => void;
    clearBlogs: () => void;
    getBlogById: (id: number) => Blog | undefined;
    getBlogBySlug: (slug: string) => Blog | undefined;
    getBlogsByCategory: (category: string) => Blog[];
}

export const useBlogsStore = create<BlogsState>()(
    persist(
        (set, get) => ({
            blogs: [],

            setBlogs: (blogs) => 
                set({ blogs }),

            addBlog: (blog) =>
                set((state) => ({
                    blogs: [blog, ...state.blogs]
                })),

            updateBlog: (id, updates) =>
                set((state) => ({
                    blogs: state.blogs.map(blog =>
                        blog.id === id ? { ...blog, ...updates } : blog
                    )
                })),

            deleteBlog: (id) =>
                set((state) => ({
                    blogs: state.blogs.filter(blog => blog.id !== id)
                })),

            clearBlogs: () => 
                set({ blogs: [] }),

            getBlogById: (id) => 
                get().blogs.find(blog => blog.id === id),

            getBlogBySlug: (slug) => 
                get().blogs.find(blog => blog.slug === slug),

            getBlogsByCategory: (category) =>
                get().blogs.filter(blog => blog.category === category),
        }),
        {
            name: 'blogs-storage',
            storage: createJSONStorage(() => localStorage),
        }
    )
);

