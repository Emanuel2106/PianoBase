// import { StateStorage } from "zustand/middleware";
import { create } from "zustand";
import { MMKV } from "react-native-mmkv";

const storage = new MMKV();

export const firstTimeStorage = create((_) => ({
  getFirstTime: (prop) => {
    const firstTime = JSON.parse(storage.getString("firstTime") ?? "{}");
    
    if(firstTime[prop]) {
      return true;
    } else {
      storage.set("firstTime", JSON.stringify({...firstTime, [prop]: true}));
      return false;
    }
  },
  setItem: (name, value) => {
    return storage.set(name, value);
  },
  getItem: (name) => {
    const value = storage.getString(name);
    return value ?? null;
  },
  removeItem: (name) => {
    return storage.delete(name);
  },
}));