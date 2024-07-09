import { create } from "zustand";

type schoolGtp1State = {
  nav: boolean;
  setNav: () => void;
};

export const useSchoolGpt1 = create<schoolGtp1State>((set) => ({
  nav: false,
  setNav: () => set((state) => ({ nav: !state.nav })),
}));
