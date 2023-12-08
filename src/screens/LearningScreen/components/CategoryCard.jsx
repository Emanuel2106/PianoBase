import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import { useTheme } from "react-native-paper";
import { Shadow } from "react-native-shadow-2";

const CategoryCard = ({item, onPress}) => {
  const { colors } = useTheme();

  return (
    <Shadow
      containerStyle={styles.container}
      childrenViewProps={{style: {flex: 1}}}
      distance={3}
    >
      <Pressable 
        onPress={onPress} 
        style={[styles.border, styles.content]}
        android_ripple={{color: colors.ripple, foreground: true}}
      >
        <>
          <View>
            <Text 
              numberOfLines={2}
              style={[styles.title, {fontFamily: "Blomberg"}]}
            >{item.name}</Text>
          </View>

          <View style={{height:15}} />

          <View style={{flex:1}}>
            <Image 
              style={{flex: 1, resizeMode: "contain"}} 
              source={{uri: item.image}} 
            />
          </View>
        </>
      </Pressable>
    </Shadow>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "47.5%", 
    aspectRatio: 1,
  },

  border: {
    borderRadius: 20.0,
    overflow: "hidden",
  },

  content: {
    flex:1,
    padding: 15.0,
    justifyContent: "center",
  },

  title: {
    fontSize: 14,
    textAlign: "center",
    color: "#000",
  },
});

export default CategoryCard;