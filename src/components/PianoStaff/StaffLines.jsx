import { View, StyleSheet } from "react-native";

const StaffLines = () => {
  return (
    <View style={styles.linesContainer}>
      {
        Array.from({length: 5}).map((_, index) => {
          return <View
            key={index.toString()}
            style={styles.line}
          />;
        })
      }
    </View>
  );
};

const styles = StyleSheet.create({
  linesContainer: {
    position: "absolute",
    width: "100%",
    height: "100%",
    justifyContent: "space-between",
  },

  line: {
    width: "100%",
    height: 2, 
    backgroundColor: "#000",
  },
});

export default StaffLines;