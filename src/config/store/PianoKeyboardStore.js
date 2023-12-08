import { create } from "zustand";

import { pianoKeys } from "../data";

export const usePianoKeyboardStore = create((set) => ({
  buttons: pianoKeys,
  setButtons: (sounds) => {
    set((state) => {
      const buttons = [...state.buttons];

      let index = 0;

      for(const button of buttons) {
        button.white = sounds[index];

        if(button.bemol) {
          button.black = sounds[index + 1];
          index++;
        }

        index++;
      }

      return {buttons};
    });
  },
}));