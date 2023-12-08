import { NavigationContainer, createNavigationContainerRef } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { AppStackGroup, AuthStackGroup } from "./groups";
import { SessionScreen } from "../screens";

const Stack = createNativeStackNavigator();

const navigation = createNavigationContainerRef();

export const RootNavigator = () => {
  return (
    <NavigationContainer ref={navigation}>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="Session"
      >
        <Stack.Screen 
          name="Session" 
          component={SessionScreen}
        />

        {/* RUTAS NO AUTH */}
        {AuthStackGroup()}
        

        {/* RUTAS AUTH */}
        {AppStackGroup()}
       
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;