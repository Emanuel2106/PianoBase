import { createContext } from "react";
import { createStore } from "zustand";

export const practiceStore = (sheet, maxNotes) => {
  const initialState = {
    matches: [],
    tones: sheet.slice(0, maxNotes),
    index: 0,
    lastIndex:0,
    attemps: 3,
    completed: false,
    failed: false,
  };

  return createStore()((set) => ({
    ...initialState,
    addTone: (tone) => set((state) => {
      if(tone.key === sheet[state.index].key) {
        const matches = state.matches;

        const win = state.index === sheet.length - 1;

        if(((matches.length + 1) === (maxNotes + state.lastIndex)) && !win) {
          const start = maxNotes + state.lastIndex;
          const end = start + maxNotes;

          return { 
            ...state,
            matches: [...state.matches, state.index],
            tones: sheet.slice(start, end),
            lastIndex: start,
            index: state.index + 1, 
          };
        }
        
        return { 
          ...state,
          matches: [...state.matches, state.index], 
          index: state.index + 1, 
          completed: win, 
        };
      } else {
        if(!state.matches.length) {
          return state;
        }

        if(state.attemps === 1) {
          return {...initialState, failed: true};
        } else {
          return {
            ...state, 
            attemps: state.attemps - 1, 
            failed: true,
          };
        }
      }
    }),
    clearError: () => set((state) => ({...state, failed: false})),
  }));
};

export const PracticeContext = createContext(null);