import { useState } from "react";
import firestore from "@react-native-firebase/firestore";

import { useSessionStore } from "../../config/store";

const users = firestore().collection("users");
const melodies = firestore().collection("melodies");

export const useMelodies = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const user = useSessionStore((state) => state.user);

  const execute = async (callback) => {
    setData(null);
    setIsLoading(true);
    setError(null);

    try {
      await callback();
    } catch (e) {
      setError(e);
    } finally {
      setIsLoading(false);
    }
  };

  const getAppMelodies = () => {
    execute(async () => {
      const { docs } = await melodies.get();

      const compositions = docs.map((doc) => doc.data());
  
      setData(compositions);
    });
  };

  const getUserMelodies = () => {
    execute(async () => {
      const { docs } = await users.doc(user.uid).collection("compositions").get();

      const compositions = docs.map((doc) => doc.data());
  
      setData(compositions);
    });
  };

  const saveMelody = (melody) => {
    execute(async () => {
      if(user.admin) {
        await melodies.add(melody);
      } else {
        await users.doc(user.uid).collection("compositions").add(melody);
      }

      setData(melody);
    });
  };

  return { isLoading, data, error, getAppMelodies, getUserMelodies, saveMelody };
};