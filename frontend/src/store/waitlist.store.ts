import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { WaitlistEntry } from '@/types/admin.types';

interface WaitlistState {
    waitlist: WaitlistEntry[];
    setWaitlist: (waitlist: WaitlistEntry[]) => void;
    addToWaitlist: (entry: WaitlistEntry) => void;
    removeFromWaitlist: (id: number) => void;
    clearWaitlist: () => void;
    getWaitlistById: (id: number) => WaitlistEntry | undefined;
    searchWaitlist: (query: string) => WaitlistEntry[];
}

export const useWaitlistStore = create<WaitlistState>()(
    persist(
        (set, get) => ({
            waitlist: [],

            setWaitlist: (waitlist) => 
                set({ waitlist }),

            addToWaitlist: (entry) =>
                set((state) => ({
                    waitlist: [entry, ...state.waitlist]
                })),

            removeFromWaitlist: (id) =>
                set((state) => ({
                    waitlist: state.waitlist.filter(entry => entry.id !== id)
                })),

            clearWaitlist: () => 
                set({ waitlist: [] }),

            getWaitlistById: (id) => 
                get().waitlist.find(entry => entry.id === id),

            searchWaitlist: (query) => {
                const lowerQuery = query.toLowerCase();
                return get().waitlist.filter(entry =>
                    entry.email.toLowerCase().includes(lowerQuery) ||
                    entry.firstName.toLowerCase().includes(lowerQuery) ||
                    entry.lastName.toLowerCase().includes(lowerQuery) ||
                    entry.phoneNumber.includes(query)
                );
            },
        }),
        {
            name: 'waitlist-storage',
            storage: createJSONStorage(() => localStorage),
        }
    )
);