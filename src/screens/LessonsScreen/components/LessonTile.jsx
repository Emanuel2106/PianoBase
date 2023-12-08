import { View, StyleSheet, Pressable, Image } from "react-native";
import { useTheme, Text } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const LessonTile = ({item, index, onPress}) => {
  const { colors } = useTheme();
 
  return (
    <Pressable
      onPress={onPress} 
      style={{flex:1}}
      android_ripple={{color: colors.ripple}}
    > 
      <View style={styles.tile}>
        <View style={styles.leading}> 
          <Image
            style={{flex:1, resizeMode: "contain"}}
            source={{uri: item.icon}} 
          />
        </View>

        <View style={{width: 20.0}} />

        <View style={{flex: 1}}>
          <Text variant="titleSmall" >
                Leccion {index + 1}: {item.title}
          </Text>
          <Text variant="bodySmall" numberOfLines={2} >
            {item.description}
          </Text>
        </View>

        <View style={{width: 10.0}} />

        <Icon name="star-check" size={30} color={"black"} />
      </View>

    </Pressable>
  );
};

const styles = StyleSheet.create({
  tile: {
    width: "100%", 
    padding: 12.0,
    flexDirection: "row",
    alignItems: "center",
  },

  leading: {
    flex: 0.3,
    aspectRatio: 1,
  },

  title: {
    color: "#000",
    fontWeight: "700",
  },
});

export default LessonTile;