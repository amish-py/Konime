import { create } from "zustand";
import { persist } from "zustand/middleware";

export type WatchlistItem = {
  id: string;
  title: string;
  poster: string;
};

interface WatchlistStore {
  items: WatchlistItem[];
  toggle: (item: WatchlistItem) => void;
  has: (id: string) => boolean;
  remove: (id: string) => void;
}

export const useWatchlistStore = create<WatchlistStore>()(
  persist(
    (set, get) => ({
      items: [],
      has: (id) => get().items.some((item) => item.id === id),
      remove: (id) =>
        set({ items: get().items.filter((item) => item.id !== id) }),
      toggle: (item) => {
        const exists = get().items.some((entry) => entry.id === item.id);
        set({
          items: exists
            ? get().items.filter((entry) => entry.id !== item.id)
            : [item, ...get().items],
        });
      },
    }),
    { name: "konime-watchlist" },
  ),
);
