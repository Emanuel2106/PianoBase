import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { FAB, Portal, useTheme } from "react-native-paper";
import { useIsFocused } from "@react-navigation/native";

import { tabHeaderStyles } from "../styles";

const Tab = createMaterialTopTabNavigator();

import { PracticeMelodiesTab, UserMelodiesTab } from "../../screens";

const MelodiesTabNavigator = ({navigation}) => {
  const { colors } = useTheme();

  const isFocused = useIsFocused();
  
  return (
    <>
      <Tab.Navigator 
        screenOptions={{
          ...tabHeaderStyles,
          tabBarIndicatorContainerStyle: {
            backgroundColor: colors.primary,
          },
        }}
      >
        <Tab.Screen 
          name="Melodies"
          component={PracticeMelodiesTab} 
          options={{tabBarLabel: "Para practicar"}} 
        />
        <Tab.Screen 
          name="Compositions" 
          component={UserMelodiesTab}
          options={{tabBarLabel: "Mis Melodias"}} 
        />
      </Tab.Navigator>

      <Portal>
        <FAB 
          visible={isFocused}
          icon={"plus"}
          style={{
            position: "absolute",
            bottom: 16,
            right: 16,
          }}
          onPress={() => navigation.push("Record")}
        />
      </Portal>
    </>
  );
};

export default MelodiesTabNavigator;