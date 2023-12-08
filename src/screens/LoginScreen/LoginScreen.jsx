import { useEffect } from "react";
import { Button, HelperText, TextInput, useTheme, Text } from "react-native-paper";
import { View, Keyboard, KeyboardAvoidingView, ScrollView, Platform } from "react-native";
import { StackActions } from "@react-navigation/native";


import { loginFormSchema } from "../../utils/forms/schemas";
import { TextStyles } from "../../utils/styles";
import { Logo, PasswordInput, Scaffold } from "../../components";
import { useForm, useAuth } from "../../hooks";
import { styles } from "./styles";
import { useSessionStore } from "../../config/store";

const initialData = {email: "", password: ""};

export const LoginScreen = ({navigation}) => {
  return (
    <Scaffold 
      body={LoginBody({navigation})}
    />
  );
};

const LoginBody = ({navigation}) => {
  const { isLoading, error, data, loginWithEmailAndPassword} = useAuth();

  const { form, setFields, isValidForm } = useForm(initialData, loginFormSchema);

  const startSession = useSessionStore((state) => state.startSession);

  const { colors } = useTheme();

  useEffect(() => {
    if(data) {
      startSession(data);
      navigation.dispatch(StackActions.replace("Home"));
    }
  }, [data]);

  const login = async () => {
    if(isLoading || !isValidForm()) {
      return;
    }

    Keyboard.dismiss();

    loginWithEmailAndPassword(form.fields.email, form.fields.password);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{flex:1}}
    >
      <ScrollView contentContainerStyle={styles.center}>
        <Logo />
        
        <View style={{ height: 25 }} />
        
        <Text variant="titleLarge">Inicia Sesion</Text>
        
        <View style={{ height: 25 }} />
        
        <View style={{ width: "80%" }}>
          <TextInput
            label="Correo"
            value={form.fields.email}
            autoCapitalize="none"
            inputMode="email"
            maxLength={50}
            onChangeText={(email) => setFields({...form.fields, email})}
            error={form.errors.email}
            mode="outlined"
            style={{backgroundColor: colors.surfaceVariant}}
          />
          
          <HelperText type="error" visible={form.errors.email}>
            {form.errors.email}
          </HelperText>
          
          <PasswordInput
            label="Contraseña"
            value={form.fields.password}
            maxLength={20}
            onChangeText={(password) => setFields({...form.fields, password})}
            error={form.errors.password}
            mode="outlined"
            style={{backgroundColor: colors.surfaceVariant}}
          />
          
          <HelperText type="error" visible={form.errors.password}>
            {form.errors.password}
          </HelperText>
          
          <View style={{alignItems: "flex-end"}} >
            <Text
              variant="labelLarge"
              style={{color: colors.primary}}
              onPress={() => navigation.push("ForgotPassword", {email: form.fields.email})}
            >
                  Olvidaste tu contraseña?
            </Text>
          </View>
          
          {error
            ? <HelperText type="error" style={TextStyles.formError}>
              {error.toString()}
            </HelperText> : <View style={{ height: 20 }} />
          }
          
          <Button
            testID="loginButton"
            textColor="#fff"
            icon={"account"}
            mode="contained"
            onPress={login}
            loading={isLoading}
          >
                INGRESAR
          </Button>
        </View>
        
        <View style={{ height: 15 }} />
        
        <Text
          variant="labelLarge"
          style={[TextStyles.underline, {color: colors.primary}]}
          onPress={() => navigation.push("Register")}
        >
              No tienes cuenta?, registrate aqui!
        </Text>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;