import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { DismissibleView } from "../../components";

import {  LoginScreen, RegisterScreen,  ForgotPasswordScreen } from "../../screens";

const Stack = createNativeStackNavigator();

const AuthStackGroup = () => {
  return (
    <Stack.Group>
      <Stack.Screen 
        name="Login" 
        children={(props) => (
          <DismissibleView>
            <LoginScreen {...props} />
          </DismissibleView>
        )}
      />

      <Stack.Screen 
        name="Register" 
        children={(props) => (
          <DismissibleView>
            <RegisterScreen {...props} />
          </DismissibleView>
        )}
      />

      <Stack.Screen 
        name="ForgotPassword" 
        children={(props) => (
          <DismissibleView>
            <ForgotPasswordScreen {...props} />
          </DismissibleView>
        )}
      />
    </Stack.Group>
  );
};

export default AuthStackGroup;