import { useNavigation } from "@react-navigation/native";
import { View, StyleSheet } from "react-native";
import { Button, Modal, Portal, Text, useTheme } from "react-native-paper";

const PracticeCompletedModal = ({visible}) => {
  const navigation = useNavigation();

  const { colors } = useTheme();

  // if(!visible) {
  //   return <></>;
  // }

  return (
    <Portal>
      <Modal visible={visible}
        dismissable={false}
        contentContainerStyle={styles.modalContainer} >
        <View>
          <Text variant="titleLarge" style={styles.text} >¡Felicidades 🎉! </Text>

          <View style={{height: 20.0}} />

          <Button
            onPress={() => navigation.goBack()}
            mode="contained"
            style={[styles.modalButton, {backgroundColor: colors.primary}]}
          >
            <Text variant="textMedium" style={{color: "#fff"}}>Volver</Text>
          </Button>
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

  text: {
    textAlign:"center",
  },
});

export default PracticeCompletedModal;