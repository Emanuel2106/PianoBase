import { useState } from "react";
import { Image, StyleSheet, View } from "react-native";
import { ActivityIndicator } from "react-native-paper";

const ImageX = ({source, style, imageStyle, resizeMode, onError}) => {
  const [loaded, setLoaded] = useState(false);
  // const [ratio, setRatio] = useState(1);

  const onLoad = () => {
    if(!loaded) {
      setLoaded(true);
    }
  };

  // const getSize = () => {
  //   Image.getSize(source.uri, 
  //     (width, height) => {
  //       setRatio(width/height);
  //     },
  //     (_) => {}
  //   );
  // };

  // useEffect(() => {
  //   getSize();
  // }, []);


  return (
    <View style={style}>
      <Image 
        source={source} 
        onLoad={onLoad}
        onError={(e) => {
          if(onError){
            onError(e.nativeEvent.error);
          }
        }}
        style={imageStyle}
        resizeMode={resizeMode}
      />
      
      { !loaded &&
          <View style={styles.fill}>
            <ActivityIndicator />
          </View>
      }
    </View>
  );
};

const styles = StyleSheet.create({
  fill: {
    position: "absolute",
    bottom:0, left:0, right:0, top: 0,
    justifyContent: "center",
    alignItems: "center",
  },
});



export default ImageX;