import { useEffect } from "react";
import { ActivityIndicator, useTheme } from "react-native-paper";
import { StackActions } from "@react-navigation/native";

import { Center } from "../../components";
import { useSessionStore } from "../../config/store";

const SessionScreen = ({navigation}) => {
  const sessionId = useSessionStore((state) => state.sessionId);
  const restoreSession = useSessionStore((state) => state.restoreSession);

  const { colors } = useTheme();

  useEffect(() => {
    validateSession(sessionId);
  }, [sessionId]);

  const validateSession = async (session) => {
    if(session) {
      try {
        await restoreSession(session);
        navigation.dispatch(StackActions.replace("Home"));
      } catch (error) {
        navigation.dispatch(StackActions.replace("Login"));
      }
    } else {
      navigation.dispatch(StackActions.replace("Login"));
    }
  };

  return (
    <Center>
      <ActivityIndicator size={"large"} color={colors.primary} />
    </Center>
  );
};

export default SessionScreen;