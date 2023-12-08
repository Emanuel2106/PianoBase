import { useContext, useState } from "react";
import { View, StyleSheet } from "react-native";
import { IconButton, Text } from "react-native-paper";
import { useStore } from "zustand";

import { RecordContext } from "../../../config/store";
import { SaveCompositionModal } from "../../../components/Modals";

const RecordHeader = ({navigation}) => {
  const store = useContext(RecordContext);

  const undo = useStore(store, (state) => state.removeLastTone);
  const clear = useStore(store, (state) => state.clearTones);

  const [visible, setVisible] = useState(false);

  return (
    <View style={styles.header}>
      <IconButton 
        icon={"arrow-left"}
        iconColor="#000"
        onPress={() => navigation.pop()}
      />

      <View style={styles.titleContainer}>
        <Text style={styles.title}>Composicion</Text>  
      </View> 

      <View style={{flexDirection: "row"}}>
        <IconButton
          icon={"undo"}
          mode="contained"
          style={[styles.fab]}
          onPress={undo}
        />

        <IconButton
          icon={"refresh"}
          mode="contained"
          style={styles.fab}
          onPress={clear}
        />

        <IconButton
          icon={"content-save"}
          mode="contained"
          style={styles.fab}
          onPress={() => setVisible(true)}
        />
      </View>  

      <SaveCompositionModal
        visible={visible}
        onDismiss={() => setVisible(false)}
      />
    </View> 
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },

  titleContainer: {
    flex: 1,
    // backgroundColor: "red",
  },

  title: {
    fontFamily: "Blomberg",
    fontSize: 20,
    alignSelf: "center",
  },

  fab: {
    borderWidth: 2,
  },
});

export default RecordHeader;