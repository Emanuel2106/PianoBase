/* eslint-disable react/no-unstable-nested-components */
import React, { useEffect } from "react";
import { View, FlatList } from "react-native";
import { ActivityIndicator } from "react-native-paper";

import { styles } from "./styles";
import { useLessons } from "../../hooks/firebase";
import { Appbar, Scaffold } from "../../components";
import { CategoryCard } from "./components";

const LearningScreen = ({navigation}) => {
  return (
    <Scaffold 
      appbar={<Appbar title="Categorias" back />}
      body={LearningScreenBody({navigation})}
    />
  );
};

const LearningScreenBody = ({navigation}) => {
  const { isLoading, data: categories, getCategories } = useLessons();

  useEffect(() => {
    getCategories();
  }, []);

  if(isLoading) {
    return <View style={styles.center}>
      <ActivityIndicator />
    </View>;
  }

  return (
    <FlatList 
      data={categories}
      keyExtractor={(item) => item.id}
      numColumns={2}
      contentContainerStyle={{padding: 20.0}}
      ItemSeparatorComponent={() => <View style={{height: 20.0}} />}
      columnWrapperStyle={{justifyContent: "space-between"}}
      renderItem={({item}) => {
        return <CategoryCard 
          item={item}
          onPress={() => navigation.push("Lessons", { categoryId: item.id })}
        />;
      }}
    />
  );
};

export default LearningScreen;