import { View, StyleSheet } from "react-native";
import { IconButton, Text } from "react-native-paper";

const PlayHeader = ({navigation}) => {
  return (
    <View style={styles.header}>
      <IconButton 
        icon={"arrow-left"}
        iconColor="#000"
        onPress={() => navigation.goBack()}
      />

      <View style={styles.titleContainer}>
        <Text style={styles.title}>LIBRE</Text>  
      </View>   
    </View> 
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },

  titleContainer: {
    flex: 1,
    // backgroundColor: "red",
  },

  title: {
    fontFamily: "Blomberg",
    fontSize: 20,
    alignSelf: "center",
  },
});

export default PlayHeader;