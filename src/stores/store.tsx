import { create } from "zustand";

type Store = {
  isMenuOpen: boolean;
  toggleMenu: () => void;
};

export const useUIStore = create<Store>((set) => ({
  isMenuOpen: false,
  toggleMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
}));
