import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useTheme } from "react-native-paper";

import { DismissibleView } from "../../components";
import { stackHeaderStyles } from "../styles";

import { 
  HomeScreen,
  ProfileScreen,
  EditProfileScreen,
  UpdatePasswordScreen,
  PianoModeScreen,
  PlayScreen,
  PracticeScreen,
  LearningScreen,
  LessonsScreen,
  LessonScreen,
  RecordScreen,
} from "../../screens";

import { MelodiesTabNavigator } from "../navigators";

const Stack = createNativeStackNavigator();

const AppStackGroup = () => {
  const { colors } = useTheme();

  return (
    <Stack.Group>
      <Stack.Screen 
        name="Home" 
        component={HomeScreen}
      />

      <Stack.Screen 
        name="Profile" 
        children={(props) => (
          <DismissibleView>
            <EditProfileScreen {...props} />
          </DismissibleView>
        )}
      />

      {/* <Stack.Screen 
        name="EditProfile" 
        children={(props) => (
          <DismissibleView>
            <EditProfileScreen {...props} />
          </DismissibleView>
        )}
      /> */}

      <Stack.Screen 
        name="UpdatePassword" 
        children={(props) => (
          <DismissibleView>
            <UpdatePasswordScreen {...props} />
          </DismissibleView>
        )}
      />

      <Stack.Screen 
        name="Settings" 
        component={ProfileScreen}
      />

      <Stack.Screen 
        name="Mode" 
        component={PianoModeScreen}
      />

      <Stack.Screen 
        name="Play" 
        component={PlayScreen}
      />

      <Stack.Screen 
        name="TabNavigator" 
        component={MelodiesTabNavigator}
        options={{
          title: "Melodias",
          ...{
            ...stackHeaderStyles,
            headerStyle: {
              backgroundColor: colors.primary,
            },
          },
        }}
      />

      <Stack.Screen 
        name="Practice" 
        component={PracticeScreen}
      />

      <Stack.Screen 
        name="Record" 
        component={RecordScreen}
      />

      <Stack.Screen 
        name="Learning" 
        component={LearningScreen}
      />

      <Stack.Screen 
        name="Lessons" 
        component={LessonsScreen}
      />
          
      <Stack.Screen 
        name="Lesson" 
        component={LessonScreen}
      />
    </Stack.Group>
  );
};

export default AppStackGroup;