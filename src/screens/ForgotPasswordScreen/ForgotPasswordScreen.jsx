import { useEffect } from "react";
import {  View, Keyboard } from "react-native";
import { Button, HelperText, TextInput, useTheme, Text, Snackbar } from "react-native-paper";

import { forgetPasswordFormSchema } from "../../utils/forms/schemas";
import { TextStyles } from "../../utils/styles";
import { Center, Logo, Scaffold } from "../../components";
import { useForm, useAuth, useSnackbar } from "../../hooks";

const ForgotPasswordScreen = ({route, navigation}) => {
  const { email } = route.params;
  
  return (
    <Scaffold 
      body={ForgotPasswordBody({initialEmail: email, navigation})}
    />
  );
};

const ForgotPasswordBody = ({initialEmail, navigation}) => {
  const { visible, showSnackbar } = useSnackbar();

  const { isLoading, error, isSuccess, sendPasswordResetEmail } = useAuth();
  
  const { form, setFields, isValidForm } = useForm({email: initialEmail}, forgetPasswordFormSchema);
  
  const { colors } = useTheme();

  useEffect(() => {
    if(isSuccess) {
      showSnackbar();
    }
  }, [isSuccess]);

  
  const resetPassword = async () => {
    if(isLoading || !isValidForm()) {
      return;
    }

    Keyboard.dismiss();

    sendPasswordResetEmail(form.fields.email);
  };

  return (
    <>
      <Center>

        <Logo/>
        
        <View style={{ height: 25 }} />
        
        <Text variant="titleLarge">Recuperar Contraseña</Text>
        
        <View style={{ height: 25 }} />
        
        <View style={{ width: "80%" }}>
          <TextInput
            label="Email"
            value={form.fields.email}
            maxLength={50}
            onChangeText={(email) => setFields({...form.fields, email})}
            error={form.errors.email}
            mode="outlined"
            style={{backgroundColor: colors.surfaceVariant}}
          />

          { form.errors.email &&
            <HelperText type="error" visible={form.errors.email}>
              {form.errors.email}
            </HelperText>
          }
          
          {error
            ? <HelperText type="error" style={TextStyles.formErrorLarge}>
              {error.toString()}
            </HelperText> : <View style={{height: 25}} />
          }
          
          <Button
            textColor="#fff"
            icon="account"
            mode="contained"
            loading={isLoading}
            onPress={resetPassword}
          >
            ENVIAR CORREO
          </Button>
        
        </View>
        
        <View style={{ height: 20 }} />
        
        <Text
          variant="labelLarge"
          style={{color: colors.primary}}
          onPress={() => navigation.goBack()}
        >
          Iniciar Sesion
        </Text>
      </Center>

      <Snackbar
        visible={visible}
        onDismiss={() => {}}
      >
        ¡Email de recuperacion enviado exitosamente 🎉!
      </Snackbar>
    </>
  );
};

export default ForgotPasswordScreen;