import { useEffect } from "react";
import { KeyboardAvoidingView, Platform, ScrollView, View, Keyboard } from "react-native";
import { Button, HelperText, Snackbar, TextInput, useTheme } from "react-native-paper";
import { Picker } from "@react-native-picker/picker";

import { styles } from "./styles";

import { useSessionStore } from "../../../../config/store";
import { fonts } from "../../../../config/theme/typography";

import { useForm, useProfile, useSnackbar } from "../../../../hooks";

import { profileFormSchema } from "../../../../utils/forms/schemas";
import { formatLocateDate } from "../../../../utils/utils";

import { Appbar, Scaffold } from "../../../../components";
import { DateTimeTextInput } from "../../components";


const UpdateProfileScreen = () => {
  return (
    <Scaffold 
      appbar={<Appbar title="Editar Perfil" back />}
      body={EditProfileBody()}
    />
  );
};

const EditProfileBody = () => {
  const user = useSessionStore((state) => state.user);
  const updateSession = useSessionStore((state) => state.updateSession);

  const { isLoading, data, error, updateProfile } = useProfile();
  
  const { form, setFields, isValidForm } = useForm({}, profileFormSchema);

  const { visible, showSnackbar } = useSnackbar();
  
  const { colors } = useTheme();

  useEffect(() => {
    if(error && !visible) {
      showSnackbar();
    }
  }, [error]);

  useEffect(() => {
    if(data) {
      updateSession(data);
    
      if(!visible) {
        showSnackbar();
      }
    }
  }, [data]);

  const onSubmit = () => {
    if(isLoading || !isValidForm()) {
      return;
    }

    Keyboard.dismiss();

    updateProfile(form.fields);
  };

  return (
    <>
      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{flex:1}}
      >
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          {/* Name and LastName */}
          <View style={styles.row}>
            <View style={{flex: 1}}>
              <TextInput 
                value={form.fields.firstName ?? user.firstName}
                label="Nombre" 
                onChangeText={(firstName) => setFields({...form.fields, firstName})}
                error={form.errors.firstName}
                mode="outlined"
                style={{backgroundColor: colors.surfaceVariant}}
              />

              <HelperText type="error" visible={form.errors.firstName}>
                {form.errors.firstName}
              </HelperText>
            </View>

            <View style={{flex: 1}}>
              <TextInput 
                value={form.fields.lastName ?? user.lastName}
                label="Apellido" 
                onChangeText={(lastName) => setFields({...form.fields, lastName})}
                error={form.errors.lastName}
                mode="outlined"
                style={{backgroundColor: colors.surfaceVariant}}
              />

              <HelperText type="error" visible={form.errors.lastName}>
                {form.errors.lastName}
              </HelperText>
            </View>
          </View>

          {/* Date */}
          <DateTimeTextInput 
            value={formatLocateDate(form.fields.date ?? user.date)}
            label="Fecha de nacimiento"
            right={<TextInput.Icon icon="calendar" />}
            mode="outlined"
            style={{backgroundColor: colors.surfaceVariant}}
            initialDate={user.date}
            onChangeDate={(date) => setFields({...form.fields, date})}
          />

          <View style={{ height: 20 }} />

          {/* Phone */}
          <TextInput
            value={form.fields.phone ?? user.phone}
            label="Numero de telefono"
            right={<TextInput.Icon icon="phone" />}
            keyboardType="numeric"
            onChangeText={(phone) => setFields({...form.fields, phone})}
            error={form.errors.phone}
            mode="outlined"
            style={{backgroundColor: colors.surfaceVariant}}
          />

          <HelperText type="error" visible={form.errors.phone}>
            {form.errors.phone}
          </HelperText>

          {/* Gender */}
          <View style={{
            ...styles.picker, 
            backgroundColor: colors.surfaceVariant, 
            borderColor: colors.onSurfaceVariant,
          }}
          >
            <Picker
              mode="dropdown"
              selectedValue={form.fields.gender ?? user.gender}
              onValueChange={(gender, _) => setFields({...form.fields, gender})}
            >
              <Picker.Item style={[fonts.textSmall]} enabled={false} label="Selecciona tu genero" value="null" />
              <Picker.Item style={[fonts.textSmall]} label="Masculino" value="masculino" />
              <Picker.Item style={[fonts.textSmall]} label="Femenino" value="femenino" />
            </Picker>
          </View>

          <View style={{ height: 20 }} />

          <Button
            style={{alignSelf: "center"}} 
            onPress={onSubmit} 
            mode="contained"
            loading={isLoading}
          >
            Actualizar Perfil
          </Button>
        </ScrollView>
      </KeyboardAvoidingView>
          
      <Snackbar
        visible={visible}
      >
        { error
          ? `No se pudo actualizar el usuario: ${error.toString()}`
          : "Usuario actualizado exitosamente"
        }
      </Snackbar>
    </>
  );
};

export default UpdateProfileScreen;