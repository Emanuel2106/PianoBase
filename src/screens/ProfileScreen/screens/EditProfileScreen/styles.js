import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1, 
    padding: 10.0,
    // alignItems: "center",
  },

  container: {
    width: "85%",
    alignItems: "stretch",
  },

  picker: {
    borderRadius: 5,
    borderWidth: 0.5,
    overflow: "hidden",
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10.0,
  },
});