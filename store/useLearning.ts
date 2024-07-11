import { create } from "zustand";

type LearningState = {
  aside: boolean;
  toggleAside: () => void;
  hideAside: () => void;
};

export const useLearning = create<LearningState>((set) => ({
  aside: false,
  toggleAside: () => set((state) => ({ aside: !state.aside })),
  hideAside: () => set({ aside: false }),
}));
