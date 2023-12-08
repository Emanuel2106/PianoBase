import { create } from "zustand";

export const userMelodiesStore = create((set) => ({
  melodies: [],
  addMelodies: (melodies) => set((_) => ({melodies})),
  addMelody: (melody) => set((state) => ({melodies: [...state.melodies, melody]})),
}));