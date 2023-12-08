import { useEffect, useState } from "react";

import { pianoKeys } from "../config/data";
import SoundPool from "../config/modules/SoundPoolModule";

export const useTones = () => {
  const [tones, setTones] = useState(pianoKeys);
  const [tonesLoaded, setTonesLoaded] = useState(false);

  useEffect(() => {
    if(!tonesLoaded) {
      loadTones();
    }
  }, [tonesLoaded]);

  const loadTones = async () => {
    const sounds = await SoundPool.loadSounds();

    let index = 0;

    for(const tone of tones) {
      tone.white = sounds[index];

      if(tone.bemol) {
        tone.black = sounds[index + 1];
        index++;
      }

      index++;
    }

    setTones(tones);

    setTonesLoaded(true);
  };

  return { tones, tonesLoaded };
};