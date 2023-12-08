import { useStore } from "zustand";
import { useState, useContext, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { Button, HelperText, Modal, Portal, Text, TextInput } from "react-native-paper";

import { useMelodies } from "../../hooks";
import { RecordContext, userMelodiesStore } from "../../config/store";
import { TextStyles } from "../../utils/styles";
import { colors } from "../../config/theme/colors";
import { useNavigation } from "@react-navigation/native";

const SaveCompositionModal = ({visible, onDismiss}) => {
  const store = useContext(RecordContext);

  const composition = useStore(store, (state) => state.melody);

  const navigation = useNavigation();

  const { isLoading, error: failed, data, saveMelody } = useMelodies();

  const addMelody = userMelodiesStore((state) => state.addMelody);

  const [saved, setSaved] = useState(false);
  const [name, setName] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    if(failed) {
      setError(error);
    }
  }, [failed]);

  const onClose = () => {
    if(isLoading) return;

    if(data) {
      setName("");
      setSaved(false);
    }
    
    onDismiss();
  };

  useEffect(() => {
    if(data) {
      addMelody(data);
      setSaved(true);
    }
  },[data]);

  const onSave = () => {
    setError(null);

    if(isLoading) return;

    if(data) {
      navigation.goBack();
      return;
    }

    if(composition.length < 14) {
      setError("Las composiciones deben tener al menos 14 notas (2 octavas)");
      return;
    }

    saveMelody({name, sheet: composition});
  };

  // if(!visible) {
  //   return <></>;
  // }

  return (
    <Portal>
      <Modal visible={visible}
        dismissable={false}
        contentContainerStyle={styles.modalContainer} >
        <View>
          <Text variant="titleMedium" style={{fontFamily: "Proxima-Nova"}} >Colocale un nombre a tu composición 🎉</Text>

          <View style={{height: 8.0}} />

          <TextInput 
            value={name}
            maxLength={20}
            onChangeText={setName}
          />

          {error 
            ? 
            <HelperText type="error" style={TextStyles.formError}>
              {error.toString()}
            </HelperText>
            : saved
              ?
              <HelperText type="info" style={styles.sucessText}>
                Composicion Guardada exitosamente
              </HelperText>
              : <View style={{height: 20}} />
          }

          <View style={styles.row}>
            <Button
              mode="outlined"
              onPress={onClose}
              style={[styles.modalButton]}
            >
              <Text variant="textMedium" style={{color: colors.primary}}>
                Volver
              </Text>
            </Button>

            <View style={{width: 10}} />

            <Button
              loading={isLoading}
              mode="contained"
              onPress={onSave}
              style={[styles.modalButton]}
            >
              <Text variant="textMedium" style={{color: "#fff"}}>
                {
                  saved ? "Salir" : "Guardar"
                }
              </Text>
            </Button>
          </View>
        </View>
      </Modal>
    </Portal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    padding: 20,
    width: "50%",
    backgroundColor: "white",
    alignSelf: "center",
    borderRadius: 20,
  },
  
  modalButton: {
    // width: "50%",
    alignSelf:"center",
    alignItems: "center",
    justifyContent: "center",
  },

  row: {
    flexDirection: "row",
    alignSelf: "flex-end",
  },

  sucessText: {
    fontSize: 14,
    textAlign: "center",
    paddingVertical: 10,
    fontFamily: "Proxima-Nova-Bold",
  },
});

export default SaveCompositionModal;