import { useFont } from "@shopify/react-native-skia";
import { useEffect, useState } from "react";

export const useTextMeasure = (fontFamily, size, text) => {
  const [textSize, setTextSize] = useState(null);
  
  const font = useFont(fontFamily, size);

  useEffect(() => {
    if(font) {
      const sizeBox = font.measureText(text);
      setTextSize(sizeBox);
    }
  },[font]);


  return { textSize };
};