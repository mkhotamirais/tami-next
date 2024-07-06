"use client";

import { create } from "zustand";

type PortoSayaState = {
  nav: boolean;
  toggleNav: () => void;
  hideNav: () => void;
};

export const usePortoSaya = create<PortoSayaState>((set) => ({
  nav: false,
  toggleNav: () => set((state) => ({ nav: !state.nav })),
  hideNav: () => set({ nav: false }),
}));
