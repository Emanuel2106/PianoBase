import { View, Pressable, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useTheme, Text } from "react-native-paper";

import { homeMenu } from "../../../config/data";
import { TextStyles } from "../../../utils/styles";

const MenuTile = ({item, index, onPress}) => {
  const { colors } = useTheme();

  return (
    <Pressable
      key={item.title}
      onPress={onPress}
      style={{flex:1}}
      android_ripple={{color: colors.ripple}}
    >
      <View
        style={[
          styles.tile,
          {
            borderBottomWidth: index === homeMenu.length - 1 ? 0 : 2,
          },
        ]}
      >
        {
          index !== 0 && <TouchableOpacity
            style={styles.blackKey}
          />
        }

        <View style={{flex: 0.35}}>
          <Image
            source={item.path}
            style={styles.cardImage}
            resizeMode="contain"
          />
        </View>

        <View style={{width: 15.0}} />

        <View style={{flex: 0.65}}>
          <Text
            variant="headlineLarge"
            style={TextStyles.italicUnderline}
          >
            {item.title}
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  tile: {
    flex: 1, 
    flexDirection: "row",
    alignItems: "center",
    padding: 10.0,
  },

  blackKey: {
    position: "absolute",
    width: "45%",
    height: "40%",
    top: "-20%",
    borderTopStartRadius: 10.0,
    borderBottomStartRadius: 10.0,
    backgroundColor: "#363332",
    right: -1,
  },

  whiteKey: {
    flex:1, 
    padding: 20.0, 
    flexDirection: "row", 
    alignItems: "center",
  },

  cardImageContainer: {
    flex: 0.35, 
    padding: 10.0,
  },

  cardImage: {
    width: "100%",
    height: "100%",
  },
});

export default MenuTile;