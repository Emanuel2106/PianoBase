import { useRef } from "react";

export const useScrollController = () => {
  const controller = useRef(null);

  const scrollTo = ({x = 0, y = 0}) => {
    if(controller.current) {
      controller.current.scrollTo({x, y, animated: true});
    }
  };

  const scrollToOffset = ({offset}) => {
    if(controller.current) {
      controller.current.scrollToOffset({offset, animated: true});
    }
  };

  return { controller, scrollTo, scrollToOffset };
};