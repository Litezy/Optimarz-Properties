import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { ClientMessage } from '@/types/admin.types';

interface MessagesState {
    messages: ClientMessage[];
    setMessages: (messages: ClientMessage[]) => void;
    addMessage: (message: ClientMessage) => void;
    deleteMessage: (id: number) => void;
    clearMessages: () => void;
    getMessageById: (id: number) => ClientMessage | undefined;
}

export const useMessagesStore = create<MessagesState>()(
    persist(
        (set, get) => ({
            messages: [],

            setMessages: (messages) => 
                set({ messages }),

            addMessage: (message) =>
                set((state) => ({
                    messages: [message, ...state.messages]
                })),

            deleteMessage: (id) =>
                set((state) => ({
                    messages: state.messages.filter(msg => msg.id !== id)
                })),

            clearMessages: () => 
                set({ messages: [] }),

            getMessageById: (id) => 
                get().messages.find(msg => msg.id === id),
        }),
        {
            name: 'messages-storage',
            storage: createJSONStorage(() => localStorage),
        }
    )
);