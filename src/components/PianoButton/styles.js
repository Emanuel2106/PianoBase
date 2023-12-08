import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  pianoButton: {
    flex: 1,
  },

  whiteKey: {
    flex:1,
    borderRightWidth: 1,
    borderTopWidth:2,
    borderBottomWidth: 2,
    borderRadius: 10.0,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 10.0,
  },

  absolute: {
    position: "absolute",
    width: "50%",
    height: "50%",
    left: "-25%",
    zIndex: 1,
  },

  blackKey: {
    flex:1,
    borderRadius: 10.0,
  },

  text: {
    // alignItems: "center",
    // alignSelf: "flex-start",
    // transform: [{rotate: "90deg"}],
  },
});