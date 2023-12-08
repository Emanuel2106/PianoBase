import { useStore } from "zustand";
import { useContext } from "react";
import { View, StyleSheet } from "react-native";

import { PracticeContext } from "../../../config/store";
import { StaffSymbol } from "../../../components/PianoStaff";
import { PracticeCompletedModal } from "../../../components/Modals";

const StaffNotes = ({noteIconSize, lineSpace, gap}) => {
  const store = useContext(PracticeContext);

  const matches = useStore(store, (state) => state.matches);
  const tones = useStore(store, (state) => state.tones);
  const lastIndex = useStore(store, (state) => state.lastIndex);
  const completed = useStore(store, (state) => state.completed);

  return (
    <>
      <View style={[styles.row, {gap}]}>
        {
          tones.map((item, index) => {
            const match = matches.includes(lastIndex + index);

            return <StaffSymbol 
              key={`${item.key}${index}`}
              item={item}
              lineSpace={lineSpace}
              noteIconSize={noteIconSize}
              withNote={true}
              match={match}
            />;
          })
        }
      </View>
        
      <PracticeCompletedModal visible={completed} />
    </>
  );
};

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: "row",
  },
});

export default StaffNotes;