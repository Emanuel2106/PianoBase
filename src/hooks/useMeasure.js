import { useEffect, useState } from "react";

export const useMeasure = (ref) => {
  const [box, setBox] = useState(null);
  
  useEffect(() => {
    if(ref.current) {
      ref.current.measure((_,__,w,h,px,py) => {
        const center = {cx: px + (w/2), cy: py + (h/2)};
        setBox({width: w, height: h, x: px, y:py, ...center});
      });
    }
  },[]);

  return { box, setBox };
};