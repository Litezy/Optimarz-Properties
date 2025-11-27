
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { AdminProfile } from '@/types/admin.types';

interface AdminState {
    admin: AdminProfile | null;
    isAuthenticated: boolean;
    setAdmin: (admin: AdminProfile) => void;
    clearAdmin: () => void;
    updateAdmin: (updates: Partial<AdminProfile>) => void;
}

export const useAdminStore = create<AdminState>()(
    persist(
        (set) => ({
            admin: null,
            isAuthenticated: false,

            setAdmin: (admin) => 
                set({ 
                    admin, 
                    isAuthenticated: true 
                }),

            clearAdmin: () => 
                set({ 
                    admin: null, 
                    isAuthenticated: false 
                }),

            updateAdmin: (updates) =>
                set((state) => ({
                    admin: state.admin 
                        ? { ...state.admin, ...updates }
                        : null
                })),
        }),
        {
            name: 'admin-storage',
        }
    )
);