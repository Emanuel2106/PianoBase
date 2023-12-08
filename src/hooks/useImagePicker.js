import { useState } from "react";
import { launchImageLibrary } from "react-native-image-picker";

export const useImagePicker = () => {
  const [pickedImage, setPickedImage] = useState(null);
  const [isCancelled, setCancelled] = useState(false);

  const pickImage = async () => {
    let result = await launchImageLibrary({
      mediaType: "photo",
      quality: 1,
    });

    if(result.didCancel) {
      setCancelled(true);
      return;
    }

    setPickedImage(result.assets[0].uri);
  };

  return { pickedImage, isCancelled, pickImage };
};