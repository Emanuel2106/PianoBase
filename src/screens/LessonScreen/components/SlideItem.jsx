import {ScrollView, StyleSheet } from "react-native";
import { Text } from "react-native-paper";

import { ImageX } from "../../../components";

const SlideItem = ({item}) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text variant="headlineMedium" style={{textAlign: "center"}}>
        {item.title}
      </Text>
            
      <ImageX 
        source={{uri: item.image}} 
        resizeMode="contain"
        style={{paddingVertical: 10}}
        imageStyle={styles.image}
      />

      {
        item.paragraphs.map((text, index) => {
          return <Text 
            key={index.toString()}
            variant="bodyLarge"
            style={{textAlign: "justify"}}
          >
            {text}
          </Text>;
        })
      }
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    padding: 20.0,
    alignItems: "center",
  },

  image:{
    width:"80%",
    aspectRatio: 1,
  },
});

export default SlideItem;