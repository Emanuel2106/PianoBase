/* eslint-disable react/no-unstable-nested-components */
import React, { useEffect } from "react";
import { FlatList, View } from "react-native";
import { ActivityIndicator, Divider } from "react-native-paper";

import { useLessons } from "../../hooks/firebase";
import { styles } from "./styles";
import { Appbar, Scaffold } from "../../components";
import { LessonTile } from "./components";

const LessonsScreen = ({route, navigation}) => {
  const { categoryId } = route.params;

  return (
    <Scaffold 
      appbar={<Appbar title="Lecciones" back />}
      body={LessonsBody({categoryId, navigation})}
    />
  );
};

const LessonsBody = ({categoryId, navigation}) => {
  const { isLoading, data: lessons, getLessons } = useLessons();

  useEffect(() => {
    getLessons(categoryId);
  }, []);

  if(isLoading) {
    return <View style={styles.center}>
      <ActivityIndicator />
    </View>;
  }

  return (
    <FlatList
      keyExtractor={(item) => item.id}
      data={lessons}
      ItemSeparatorComponent={() => <Divider />}
      renderItem={({item, index}) => {
        return <LessonTile 
          item={item}
          index={index}
          onPress={() => navigation.push("Lesson", {categoryId, lesson: item})}
        />;
      }}
    />
  );
};

export default LessonsScreen;