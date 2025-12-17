import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { DownloadEntry } from '@/types/admin.types';

interface DownloadsState {
    downloads: DownloadEntry[];
    setDownloads: (downloads: DownloadEntry[]) => void;
    addDownload: (entry: DownloadEntry) => void;
    removeDownload: (id: number) => void;
    clearDownloads: () => void;
    getDownloadById: (id: number) => DownloadEntry | undefined;
    searchDownloads: (query: string) => DownloadEntry[];
}

export const useDownloadsStore = create<DownloadsState>()(
    persist(
        (set, get) => ({
            downloads: [],

            setDownloads: (downloads) => 
                set({ downloads }),

            addDownload: (entry) =>
                set((state) => ({
                    downloads: [entry, ...state.downloads]
                })),

            removeDownload: (id) =>
                set((state) => ({
                    downloads: state.downloads.filter(entry => entry.id !== id)
                })),

            clearDownloads: () => 
                set({ downloads: [] }),

            getDownloadById: (id) => 
                get().downloads.find(entry => entry.id === id),

            searchDownloads: (query) => {
                const lowerQuery = query.toLowerCase();
                return get().downloads.filter(entry =>
                    entry.email.toLowerCase().includes(lowerQuery) ||
                    entry.firstName.toLowerCase().includes(lowerQuery) ||
                    entry.lastName.toLowerCase().includes(lowerQuery)
                );
            },
        }),
        {
            name: 'downloads-storage',
            storage: createJSONStorage(() => localStorage),
        }
    )
);
