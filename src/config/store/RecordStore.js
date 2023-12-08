import { createContext } from "react";
import { createStore } from "zustand";

// const notesPerSection = 14;

export const recordStore = (maxNotes) => {
  return createStore()((set) => ({
    melody: [],
    tones: [],
    start: 0,
    addTone: (tone) => set((state) => {
      const nextSection = (state.melody.length + 1) % (maxNotes + 1) === 0;

      let start = state.start;
      
      if(nextSection) {
        start = start + maxNotes;
      }
       
      const melody = [...state.melody, tone];
      const tones = melody.slice(start, start + maxNotes);

      return { melody, tones, start };
    }),
    removeLastTone: () => set((state) => {
      if(!state.melody.length) {
        return state;
      }

      const previousSection = (state.melody.length + 1) % (maxNotes + 1) === 1;

      // console.log(`module: ${(state.melody.length + 1) % (maxNotes + 1)}`);

      let start = state.start;

      if(previousSection) {
        start = start - maxNotes;
      }

      // console.log(`start: ${start} - end: ${start + maxNotes}`);

      const melody = state.melody.slice(0, -1);
      const tones = melody.slice(start, start + maxNotes);

      return { melody, tones, start };
    }),
    clearTones: () => set({melody:[], tones: [], start :0}),
  }));
};

export const RecordContext = createContext(null);