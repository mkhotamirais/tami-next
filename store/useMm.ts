"use client";

import { create } from "zustand";

type Theme = "light" | "dark";
type MmState = {
  theme: Theme;
  mm: boolean;
  heroBtn: boolean;
  bottomMenu: boolean;
  toggleMm: () => void;
  hideMm: () => void;
  toggleHeroBtn: () => void;
  hideHeroBtn: () => void;
  showHeroBtn: () => void;
  toggleBottomMenu: () => void;
  setTheme: (theme: Theme) => void;
};

export const useMm = create<MmState>((set) => ({
  theme: "light",
  mm: false,
  heroBtn: true,
  bottomMenu: true,
  toggleMm: () => set((state) => ({ mm: !state.mm })),
  hideMm: () => set({ mm: false }),
  toggleHeroBtn: () => set((state) => ({ heroBtn: !state.heroBtn })),
  hideHeroBtn: () => set({ heroBtn: false }),
  showHeroBtn: () => set({ heroBtn: true }),
  toggleBottomMenu: () => set((state) => ({ bottomMenu: !state.bottomMenu })),
  setTheme: (theme: Theme) => set({ theme }),
}));
