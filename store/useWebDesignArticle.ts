"use client";

import { create } from "zustand";

type WebDesignArticleState = {
  cari: boolean;
  keyCari: string;
  toggleCari: () => void;
  setKeyCari: (keyCari: string) => void;
};

export const useWebDesignArticle = create<WebDesignArticleState>((set) => ({
  cari: false,
  keyCari: "",
  toggleCari: () => set((state) => ({ cari: !state.cari })),
  setKeyCari: (keyCari) => set({ keyCari }),
}));
