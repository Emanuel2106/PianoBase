import { useWindowDimensions } from "react-native";



export const usePianoDimensions = () => {
  const { width, height } = useWindowDimensions();

  const maxButtons = 10;

  const gap = 20.0;

  const tileWidth = width / maxButtons;

  const staffHeight = height * 0.35;

  const linesHeight = staffHeight * 0.6;

  const staffIconSize = linesHeight;

  const lineSpace = linesHeight / 4;

  const noteIconSize = lineSpace;

  const maxNotes = Math.floor((width - linesHeight) / (noteIconSize + gap));

  return { tileWidth, staffIconSize, noteIconSize, gap, lineSpace, maxNotes, maxButtons };
};