import { create } from "zustand";
import firestore from "@react-native-firebase/firestore";

import { storage } from "../storage";

const users = firestore().collection("users");

export const useSessionStore = create((set) => ({
  user: null,
  
  sessionId: storage.getString("sessionId"),
  restoreSession: async (uid) => {
    const data = (await users.doc(uid).get()).data();
    const {date, ...user} = {uid, ...data};
    set({user: {...user, date: date?.toDate()}, sessionId: uid});
  },
  startSession: ({date, ...user}) => {
    storage.set("sessionId", user.uid);
    set({user: {...user, date: date?.toDate()}, sessionId: user.uid});
  },
  endSession: () => {
    storage.delete("sessionId");
    set((state) => ({...state, sessionId: null}));
  },
  updateSession: (data) => {
    set((state) => ({user: {...state.user, ...data}, sessionId: state.sessionId}));
  },
}));