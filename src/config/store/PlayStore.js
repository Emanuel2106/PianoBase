import { createContext } from "react";
import { createStore } from "zustand";

export const playStore = (maxNotes) => {
  return createStore()((set) => ({
    tones: [],
    addTone: (tone) => set((state) => {
      if(state.tones.length >= maxNotes) {
        return {tones: [tone]};
      } else {
        return {tones: [...state.tones, tone]};
      }
    }),
    clearTones: () => set({tones: []}),
  }));
};

export const PlayContext = createContext(null);