import { useState } from "react";
import firestore from "@react-native-firebase/firestore";
import storage from "@react-native-firebase/storage";

import { useSessionStore } from "../../config/store";
import { getImageExtension } from "../../utils/utils";

const users = firestore().collection("users");

export const useProfile = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const user = useSessionStore((state) => state.user);

  const execute = async (callback) => {
    setData(false);
    setError(null);
    setIsLoading(true);

    try {
      await callback();
      // setData(result);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  const updateAvatar = async (image) => {
    execute(async () => {
      const extension = getImageExtension(image);
      const imgName = `${user.uid}.${extension}`;

      const avatarRef = storage().ref(imgName);
      await avatarRef.putFile(image);
      const avatarUrl = await avatarRef.getDownloadURL();

      await users.doc(user.uid).update({avatar: avatarUrl});
      setData(avatarUrl);
    });
  };

  const updateProfile = async (newData) => {
    if(!Object.keys(newData).length) {
      return;
    }
    
    execute(async () => {
      await users.doc(user.uid).update(newData);
      setData(newData);
    });
  };

  return { isLoading, data, error, updateAvatar, updateProfile };
};