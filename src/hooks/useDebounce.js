import { useEffect } from "react";

export const useDebounce = (delay) => {
  let timer;

  useEffect(() => {
    return () => {
      clearTimeout(timer);
    };
  }, []);

  const debounce = (callback) => {
    clearTimeout(timer);
    timer = setTimeout(callback, delay);
  };

  const cancel = () => {
    clearTimeout(timer);
  };

  return { debounce, cancel };
};