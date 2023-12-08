import { View, StyleSheet } from "react-native";

const PageIndicator = ({currentPage, pagesLength}) => {
  return (
    <View style={styles.container}>
      {Array.from({length: pagesLength}).map((_, idx) => {
        return <View 
          key={idx.toString()} 
          style={[
            styles.dot, 
            idx === currentPage && styles.dotActive,
          ]}
        />;
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 16,
    flexDirection:"row",
    width: "100%",
    justifyContent: "center",
  },

  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "#ccc",
    marginHorizontal: 3,
  },

  dotActive:{
    backgroundColor:"#003",
  },
});

export default PageIndicator;