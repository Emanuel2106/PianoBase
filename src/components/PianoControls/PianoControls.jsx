import { useEffect, useState } from "react";
import { View, StyleSheet, Pressable, useWindowDimensions } from "react-native";
import { useTheme } from "react-native-paper";

import { Triangle  } from "../Shapes";

const pianoLength = 49;

const PianoControls = ({scrollRef, maxButtons, initialPosition}) => {
  const { width } = useWindowDimensions();

  const [position, setPosition] = useState(initialPosition ?? 0);

  const { colors } = useTheme();

  const maxExtent = ((width / maxButtons) * pianoLength) - width;

  useEffect(() => {
    let timeout;

    if(initialPosition) {
      timeout = setTimeout(() => {
        scrollRef.current.scrollToOffset({offset: position});
      }, 500);
    }

    return () => clearTimeout(timeout);
  }, []);

  const onRightPressed = () => {
    if(position === maxExtent) return;

    let offset = position + width;
    
    if(offset > maxExtent) {
      offset = maxExtent;
    }

    scrollRef.current.scrollToOffset({offset: offset});

    setPosition(offset);
  };

  const onLeftPressed = () => {
    if(position === 0) return;

    let offset = 0;

    if(position > 0) {
      offset = position - width;
    } 

    scrollRef.current.scrollToOffset({offset: offset});

    setPosition(offset);
  };

  return (
    <View style={styles.contaniner}>
      {/* Left Button */}
      <Pressable
        onPress={onLeftPressed}
        style={[
          styles.button,
          {backgroundColor: colors.primary},
        ]} 
      >
        <Triangle 
          width={12}
          height={12}
          color="#fff"
          direction="left"
        />
      </Pressable>
      
      {/* Right Button */}
      <Pressable
        onPress={onRightPressed}
        style={[
          styles.button,
          {backgroundColor: colors.primary},
        ]} 
      >
        <Triangle 
          width={12}
          height={12}
          color="#fff"
          direction="right"
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  contaniner: {
    position: "absolute",
    top: "36%",
    height: "14%",
    width: "98%",
    alignSelf: "center",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  button: {
    height: "90%",
    aspectRatio:1,
    borderRadius: 100,
    justifyContent: "center",
    alignItems:"center",
    opacity: 0.6,
  },
});

export default PianoControls;