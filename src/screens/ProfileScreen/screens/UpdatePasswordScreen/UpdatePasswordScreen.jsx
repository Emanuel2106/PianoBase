import { useEffect } from "react";
import { View, Keyboard } from "react-native";
import { Button, HelperText, Snackbar, useTheme } from "react-native-paper";

import { styles } from "./styles";
import { useAuth, useForm, useSnackbar } from "../../../../hooks";
import { updatePasswordFormSchema } from "../../../../utils/forms/schemas";
import { Appbar, PasswordInput, Scaffold } from "../../../../components";
import { useSessionStore } from "../../../../config/store";

const UpdatePasswordScreen = () => {
  return (
    <Scaffold 
      appbar={<Appbar title="Actualizar contraseña" back />}
      body={UpdatePasswordBody()}
    />
  );
};

const UpdatePasswordBody = () => {
  const { isLoading, error, isSuccess, updatePassword } = useAuth();

  const { form, setFields, isValidForm } = useForm({}, updatePasswordFormSchema);

  const { visible, showSnackbar } = useSnackbar();

  const user = useSessionStore((state) => state.user);

  const { colors } = useTheme();

  useEffect(() => {
    if(isSuccess || error) {
      if(!visible) {
        showSnackbar();
      }
    }
  }, [isSuccess, error]);

  const onSubmit = () => {
    if(isLoading || !isValidForm()) {
      return;
    }

    Keyboard.dismiss();

    updatePassword(
      user.email,
      form.fields.password, 
      form.fields.newPassword
    );
  };

  return (
    <>
      <View style={styles.container}>
        {/* Current Password */}
        <PasswordInput
          value={form.fields.password}
          label="Contraseña"
          maxLength={20}
          onChangeText={(password) => setFields({...form.fields, password})}
          error={form.errors.password}
          mode="outlined"
          style={{backgroundColor: colors.surfaceVariant}}
        />

        <HelperText type="error" visible={form.errors.password}>
          {form.errors.password}
        </HelperText>

        <PasswordInput
          value={form.fields.newPassword}
          label="Nueva contraseña"
          maxLength={20}
          // right={<TextInput.Icon icon="lock" />}
          onChangeText={(newPassword) => setFields({...form.fields, newPassword})}
          error={form.errors.newPassword}
          mode="outlined"
          style={{backgroundColor: colors.surfaceVariant}}
        />

        <HelperText type="error" visible={form.errors.newPassword}>
          {form.errors.newPassword}
        </HelperText>

        {/* New Password Confirmation */}
        <PasswordInput
          value={form.fields.newPasswordConfirmation}
          label="Confirmacion nueva contraseña"
          maxLength={20}
          // right={<TextInput.Icon icon="lock" />}
          onChangeText={(newPasswordConfirmation) => setFields({...form.fields, newPasswordConfirmation})}
          error={form.errors.newPasswordConfirmation}
          mode="outlined"
          style={{backgroundColor: colors.surfaceVariant}}
        />

        <HelperText type="error" visible={form.errors.newPasswordConfirmation}>
          {form.errors.newPasswordConfirmation}
        </HelperText>

        <View style={{ height: 20 }} />

        <Button
          style={{alignSelf: "center"}} 
          onPress={onSubmit} 
          mode="contained"
          loading={isLoading}
        >
            Actualizar Contraseña
        </Button>
      </View>

      <Snackbar
        visible={visible}
      >
        { error
          ? `Error al actualizar contraseña: ${error.toString()}`
          : "Contraseña actualizada exitosamente"
        }
      </Snackbar>
    </>
  );
};

export default UpdatePasswordScreen;