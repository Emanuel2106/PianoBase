import { View, Text, Pressable, StyleSheet, Image } from "react-native";

const PianoModeCard = ({onPress, background, text}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.card]}
      android_ripple={{color: "#ccc"}}
    >
      <View style={{flex:1}}>
        <Image
          source={background}
          resizeMode="contain"
          style={styles.fill}
        />

        <View style={styles.overlay} />

        <View style={styles.titleContainer} >
          <Text style={styles.title}>
            {text}
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "80%",
    height: "80%",
    borderRadius: 20,
    overflow: "hidden",
    alignSelf:"center",
  },

  fill: {
    position: "absolute", 
    width:"100%", 
    height:"100%",
  },

  overlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor:"#000",
    opacity: 0.3,
    zIndex: 1,
  },

  titleContainer: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    position:"absolute",
    zIndex:2,
  },

  title: {
    fontFamily: "Blomberg", 
    fontSize: 60, 
    textDecorationLine: "underline", 
    color: "#fff",
  },
});

export default PianoModeCard;