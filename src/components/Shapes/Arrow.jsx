import React from "react";
import { StyleSheet, View } from "react-native";

const Arrow = ({ size = 10, color = "black", direction = "right" }) => {
  const arrowWidth = size / 3.5;

  const transform = () => {
    if(direction === "right") {
      return [{rotate: "180deg"}];
    } else if(direction === "up") {
      return [{rotate: "90deg"}];
    } else if(direction === "down"){
      return [{rotate: "270deg"}];
    }
    return undefined;
  };
  
  return (
    <View style={{ ...styles.container, width: size * 1.9, height: size * 1.6, transform: transform()  }}>
      <View style={{
        ...styles.arrowHead1,
        backgroundColor: color, width: size, height: arrowWidth, top: size * 0.4,
      }} />
      <View style={{ ...styles.arrowHead2, backgroundColor: color, width: size, height: arrowWidth, top: size * 0.9 }} />
      <View style={{ ...styles.arrowTail, height: arrowWidth, backgroundColor: color, top: size * 0.65, width: size * 1.3, left: size * 0.4 }} />
    </View>
  );
};

export default Arrow;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    overflow: "visible",
  },
  arrowTail: {
    borderTopColor: "transparent",
    borderStyle: "solid",
    position: "absolute",
  },
  arrowHead2: {
    borderTopColor: "transparent",
    borderStyle: "solid",
    transform: [{ rotate: "45deg" }],
    position: "absolute",
  },
  arrowHead1: {
    borderTopColor: "transparent",
    borderStyle: "solid",
    transform: [{ rotate: "135deg" }],
    position: "absolute",
  },
});