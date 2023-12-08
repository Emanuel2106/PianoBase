import { View, StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const levels = {
  1: {color: "#7ad151", name: "Facil"},
  2: {color: "#e3eb45", name: "Medio"},
  3: {color: "#e13232", name: "Dificil"},
};

const iconSize = 14;

const DifficultyIndicator = ({level = 1}) => {

  return (
    <View style={{justifyContent: "center", alignItems: "center"}}>
      <View style={{flexDirection:"row"}}>
        {
          Array.from({length: 3}).map((_, index) => {
            return <View
              key={index.toString()}
            >
              <Icon
                name={(index + 1) <= level ? "star" : "star-outline"}
                color={levels[level].color}
                size={iconSize}
              />
            </View>;
          })
        }
      </View>
      
      <View>
        <Text style={styles.title}>
          {levels[level].name}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    backgroundColor:"#00000048",
  },

  title: {
    fontFamily: "Blomberg",
    fontSize:10,
  },
});

export default DifficultyIndicator;