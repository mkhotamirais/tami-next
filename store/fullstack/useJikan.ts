import { create } from "zustand";

type JikanState = {
  page: number;
  setPage: (page: number) => void;
};

export const useJikan = create<JikanState>((set) => ({
  page: 1,
  setPage: (page) => set({ page }),

  // page: parseInt(localStorage.getItem("jikanPage") ?? "1", 10), // Mengambil nilai dari local storage, default 1
  // setPage: (page) => {
  //   set({ page });
  //   localStorage.setItem("jikanPage", page.toString()); // Menyimpan nilai ke local storage saat setPage dipanggil
  // },
}));
