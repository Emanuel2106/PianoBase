/* eslint-disable react/no-unstable-nested-components */
import { useEffect } from "react";
import { View, FlatList } from "react-native";
import { ActivityIndicator, Divider, List } from "react-native-paper";
import { OrientationLocker, PORTRAIT } from "react-native-orientation-locker";

import { styles } from "./styles";
import { fonts } from "../../../config/theme/typography";
import { useMelodies } from "../../../hooks/firebase";
import { DifficultyIndicator } from "../../../components";

// const iconSize = 40.0;

const PracticeMelodiesTab = ({navigation}) => {
  const { isLoading, data: melodies, getAppMelodies } = useMelodies();

  useEffect(() => {
    getAppMelodies();
  },[]);

  if(isLoading) {
    return <View style={styles.center}>
      <ActivityIndicator />
    </View>;
  }

  return (
    <>
      <FlatList 
        data={melodies}
        keyExtractor={(item) => item.name}
        ItemSeparatorComponent={() => <Divider />}
        renderItem={({item}) => {
          return <List.Item
            title={item.name}
            titleStyle={[fonts.textSmall]}
            titleNumberOfLines={1}
            onPress={() => navigation.push("Practice", {melody: item})}
            left={props => <List.Icon {...props} icon={"music"} />}
            right={() => <DifficultyIndicator level={item.level} />}
          />;
        }}
      />

      <OrientationLocker orientation={PORTRAIT}/>
    </>
  );
};

export default PracticeMelodiesTab;