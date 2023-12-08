import { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
// import LottieView from "lottie-react-native";
import { StackActions } from "@react-navigation/native";
import { OrientationLocker, LANDSCAPE } from "react-native-orientation-locker";

// import { Lottie } from "../../config/constants/assets";

const PianoLoader = ({route, navigation}) => {
  const { screen } = route.params;

  // let changing = false;

  // const onOrientationChanged = (_) => {
  //   if(!changing) {
  //     changing = true;
  //     const timeout = setTimeout(() => {
  //       navigation.dispatch(StackActions.replace(screen));
  //       clearTimeout(timeout);
  //     });
  //   }
  // };

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.dispatch(StackActions.replace(screen));
      clearTimeout(timeout);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <View style={styles.container}>
        {/* <LottieView
          autoPlay
          style={{width: "75%", height: "75%"}}
          source={Lottie.loading}
        /> */}
      
        <View style={styles.absolute}>
          <Text variant="headlineMedium" style={{fontFamily: "Blomberg"}}>
            Preparando el teclado...
          </Text>
        </View>
      </View>

      <OrientationLocker orientation={LANDSCAPE} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:"center",
    alignItems: "center",
  },

  absolute: {
    position: "absolute",
    top: "25%",
  },
});

export default PianoLoader;