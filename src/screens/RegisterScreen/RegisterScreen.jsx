import { useEffect } from "react";
import { Button, HelperText, TextInput, useTheme, Text } from "react-native-paper";
import {  View, Keyboard, KeyboardAvoidingView, ScrollView, Platform } from "react-native";
import { StackActions } from "@react-navigation/native";

import { registerFormSchema } from "../../utils/forms/schemas";
import { TextStyles } from "../../utils/styles";
import { Logo, PasswordInput, Scaffold } from "../../components";
import { useForm, useAuth } from "../../hooks";
import { styles } from "./styles";
import { useSessionStore } from "../../config/store";

const initialData = {email: "", password: ""};

const RegisterScreen = ({ navigation }) => {
  return (
    <Scaffold
      body={RegisterBody({navigation})}
    />
  );
};

const RegisterBody = ({navigation}) => {
  const { isLoading, error, data, registerWithEmailAndPassword } = useAuth();

  const { form, setFields, isValidForm } = useForm(initialData, registerFormSchema);

  const startSession = useSessionStore((state) => state.startSession);

  const { colors } = useTheme();

  useEffect(() => {
    if(data) {
      startSession(data);
      navigation.dispatch(StackActions.replace("Home"));
    }
  }, [data]);

  const register = async () => {
    if(isLoading || !isValidForm()) {
      return;
    }

    Keyboard.dismiss();

    registerWithEmailAndPassword(form.fields.email, form.fields.password);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{flex:1}}
    >
      <ScrollView contentContainerStyle={styles.center}>
        <Logo/>

        <View style={{ height: 25 }} />

        <Text variant="titleLarge">Registrate</Text>

        <View style={{ height: 25 }} />

        <View style = {{ width:"80%" }}>
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

          { form.errors.password &&
              <HelperText HelperText type="error" visible={true}>
                {form.errors.password}
              </HelperText>
          }

          {error
            ? <HelperText type="error" style={[TextStyles.formErrorLarge]}>
              {error.toString()}
            </HelperText> : <View style={{ height: 25 }} />
          }

          <Button
            textColor="#fff"
            icon={"account"}
            mode="contained"
            onPress={register}
            loading={isLoading}
          >
            REGISTRARSE
          </Button>

          <View style={{ height: 10 }} />

          <Text
            variant="labelLarge"
            style={[TextStyles.underline, {color: colors.primary}]}
            onPress={() => navigation.goBack()}
          >
            Ya tienes cuenta? inica sesion!
          </Text>
        </View>
      </ScrollView>

    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;