import { View, StyleSheet } from "react-native";

import { Text, useTheme } from "react-native-paper";

const positions = {
  "do":   4.5,
  "re":   4.0,
  "mi":   3.5,
  "fa":   3.0,
  "sol":  2.5,
  "la":   2.0,
  "si":   1.5,
};

const StaffSymbol = ({noteIconSize, item, lineSpace, match, withNote}) => {
  const noteSize = 14.0;

  const { colors } = useTheme();

  return (
    <View 
      style={{
        transform: [{translateY: (lineSpace - 2) * (positions[item.note])}],
        width: noteIconSize,
        height: noteIconSize,
      }}
    >
      <View
        style={{
          flex:1,
          backgroundColor: 
            item.bemol 
              ? "transparent" 
              : match ? colors.primary : "#000",
          borderWidth: item.bemol ? 2 : 0,
          borderColor: "#000",
          borderRadius: noteIconSize / 2,
        }}
      />

      <View 
        style={[
          styles.stick,
          {
            height: (lineSpace-2) * 2,
            bottom: lineSpace / 2,
            right: item.bemol ? (noteIconSize - 2) : 0,
            backgroundColor: match ? colors.primary : "#000",
          },
        ]}
      />

      { withNote &&
          <View 
            style={[
              styles.noteContainer,
              {bottom: -(noteSize * 1.35)},
            ]}
          >
            <Text 
              style={[
                styles.noteText, 
                {
                  fontSize: noteSize,
                  color: match ? colors.primary : "#000",
                },
              ]}
            >
              {item.note.toUpperCase()}{item.bemol ? "B" : ""}{item.octave.toString()}
            </Text>
          </View>
      }  
    </View>
  );
};

const styles = StyleSheet.create({
  stick: {
    position: "absolute",
    width: 2,
    right: 0,
    borderRadius: 10,
  },

  noteContainer: {
    position: "absolute",
    width: "150%",
    alignSelf: "center",
    height: "100%",
  },

  noteText: {
    fontFamily: "Blomberg",
    textAlign: "center",
    textShadowColor: "#fff",
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
  },
});

export default StaffSymbol;