import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { IconButton, Text, useTheme } from "react-native-paper";
import { useStore } from "zustand";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import { PracticeContext } from "../../../config/store";


const PracticeHeader = ({navigation, name}) => {
  const store = useContext(PracticeContext);

  const attemps = useStore(store, (state) => state.attemps);

  const { colors } = useTheme();

  return (
    <View style={styles.header}>
      <IconButton 
        icon={"arrow-left"}
        iconColor="#000"
        onPress={() => navigation.pop()}
      />

      <View style={styles.titleContainer}>
        <Text style={styles.title}>{name}</Text>  
      </View> 

      <View style={{flexDirection: "row"}}>
        {
          Array.from({length: 3}).map((_, index) => {
            const match = index < attemps;

            return <Icon 
              key={index.toString()}
              size={20}
              name={match ? "music-note" : "music-note-outline"}
              color={match ? "#000" : colors.error}
            />;
          })
        }
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

export default PracticeHeader;