/* eslint-disable react/no-unstable-nested-components */
import { useEffect } from "react";
import { View, FlatList } from "react-native";
import { ActivityIndicator, Divider, List, useTheme } from "react-native-paper";
import { OrientationLocker, PORTRAIT } from "react-native-orientation-locker";

import { styles } from "./styles";
import { fonts } from "../../../config/theme/typography";
import { useMelodies } from "../../../hooks/firebase";

import { userMelodiesStore } from "../../../config/store";

// const iconSize = 40.0;

const UserMelodiesTab = ({navigation}) => {
  const { isLoading, data, getUserMelodies } = useMelodies();

  const addMelodies = userMelodiesStore((state) => state.addMelodies);
  const melodies = userMelodiesStore((state) => state.melodies);

  const { colors } = useTheme();

  useEffect(() => {
    getUserMelodies();
  },[]);

  useEffect(() => {
    if(data) {
      addMelodies(data);
    }
  },[data]);

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
            right={props => <List.Icon {...props} 
              icon="play-circle-outline"
              color={colors.primary} 
            />}
          />;
        }}
      />

      <OrientationLocker orientation={PORTRAIT}/>
    </>
  );
};

export default UserMelodiesTab;