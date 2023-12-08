import { useStore } from "zustand";
import { useContext } from "react";
import { View, StyleSheet } from "react-native";

import { PlayContext } from "../../../config/store";
import { StaffSymbol } from "../../../components/PianoStaff";

const StaffNotes = ({noteIconSize, lineSpace, gap}) => {
  const store = useContext(PlayContext);
  
  const tones = useStore(store, (state) => state?.tones ?? []);

  return (
    <View style={[styles.row, {gap}]}>
      {
        tones.map((item, index) => {
          return <StaffSymbol 
            key={`${item.key}${index}`}
            item={item}
            lineSpace={lineSpace}
            noteIconSize={noteIconSize}
          />;
        })
      }
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: "row",
  },
});

export default StaffNotes;