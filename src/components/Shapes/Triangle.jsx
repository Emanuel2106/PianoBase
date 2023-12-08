import { StyleSheet, View } from "react-native";

const Triangle = ({width = 0, height = 0, direction = "up", color = "#fff"}) => {
  const borderStyles = () => {
    if(direction === "up") {
      return {
        borderTopWidth: 0,
        borderRightWidth: width/2.0,
        borderBottomWidth: height,
        borderLeftWidth: width/2.0,
        borderTopColor: "transparent",
        borderRightColor: "transparent",
        borderBottomColor: color,
        borderLeftColor: "transparent",
      };
    } else if(direction === "right") {
      return {
        borderTopWidth: height/2.0,
        borderRightWidth: 0,
        borderBottomWidth: height/2.0,
        borderLeftWidth: width,
        borderTopColor: "transparent",
        borderRightColor: "transparent",
        borderBottomColor: "transparent",
        borderLeftColor: color,
        marginLeft: width / 4,
      };
    } else if(direction === "down") {
      return {
        borderTopWidth: height,
        borderRightWidth: width/2.0,
        borderBottomWidth: 0,
        borderLeftWidth: width/2.0,
        borderTopColor: color,
        borderRightColor: "transparent",
        borderBottomColor: "transparent",
        borderLeftColor: "transparent",
      };
    } else if(direction === "left") {
      return {
        borderTopWidth: height/2.0,
        borderRightWidth: width,
        borderBottomWidth: height/2.0,
        borderLeftWidth: 0,
        borderTopColor: "transparent",
        borderRightColor: color,
        borderBottomColor: "transparent",
        borderLeftColor: "transparent",
        marginRight: width / 4,
      };
    }
  };

  return (
    <View style={[styles.triangle, borderStyles()]}/>
  );
};

const styles = StyleSheet.create({
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
  },
});

export default Triangle;