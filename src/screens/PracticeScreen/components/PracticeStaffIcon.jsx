import { useContext, useEffect } from "react";
import { StyleSheet } from "react-native";
import { useStore } from "zustand";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import { PracticeContext } from "../../../config/store";
import { useTheme } from "react-native-paper";

const PracticeStaffIcon = ({iconSize}) => {
  const store = useContext(PracticeContext);

  const failed = useStore(store, (state) => state.failed);
  const clear = useStore(store, (state) => state.clearError);

  const { colors } = useTheme();

  let timer;

  useEffect(() => {
    if(failed) {    
      timer = setTimeout(() => {
        clear();
        clearTimeout(timer);
      }, 400);
    }

    return () => {
      clearTimeout(timer);
    };
  },[failed]);

  return (
    <Icon 
      name="music-clef-treble" 
      size={iconSize} 
      color={failed ? colors.error : "#1e1e1e"}
      style={[styles.backIcon, {width: iconSize}]} 
    />
  );
};

const styles = StyleSheet.create({
  backIcon: {
    aspectRatio:1,
    transform: [{translateY: -5}],
  },
});

export default PracticeStaffIcon;