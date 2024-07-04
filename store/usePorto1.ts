"use client";

import { links } from "@/components/landing/porto-1/lib/data";
import { create } from "zustand";

type SectionName = (typeof links)[number]["name"];
type Porto1State = {
  nav: boolean;
  activeSection: SectionName;
  timeLastClick: number;
  toggleNav: () => void;
  hideNav: () => void;
  setActiveSection: (activeSection: SectionName) => void;
  setTimeLastClick: (timeLastClick: number) => void;
};

export const usePorto1 = create<Porto1State>((set) => ({
  nav: false,
  activeSection: "Home",
  timeLastClick: 0,
  toggleNav: () => set((state) => ({ nav: !state.nav })),
  hideNav: () => set({ nav: false }),
  setActiveSection: (activeSection: SectionName) => set({ activeSection }),
  setTimeLastClick: (timeLastClick) => set({ timeLastClick }),
}));
