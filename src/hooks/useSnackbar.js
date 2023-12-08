import { useEffect, useState } from "react";


export const useSnackbar = (delay) => {
  const [visible, setVisible] = useState(false);

  let timeout;

  useEffect(() => {
    return () => {
      clearTimeout(timeout);
    };
  },[]);

  const showSnackbar = (whenHide) => {
    setVisible(true);
      
    timeout = setTimeout(() => {
      setVisible(false);
      
      if(whenHide) {
        whenHide();
      }
    }, delay ?? 3000);
  };

  return { visible, showSnackbar };
};