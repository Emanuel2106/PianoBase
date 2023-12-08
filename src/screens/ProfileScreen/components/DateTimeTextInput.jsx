import { useEffect } from "react";
import { View, Pressable } from "react-native";
import { TextInput } from "react-native-paper";
import { useDateTimePicker } from "../../../hooks";

const DateTimeTextInput = ({value, label, right, mode, style, initialDate, onChangeDate }) => {
  const { pickedDate, showCalendar } = useDateTimePicker();

  useEffect(() => {
    if(pickedDate) {
      onChangeDate(pickedDate);
    }
  }, [pickedDate]);

  return (
    <Pressable onPress={() => showCalendar(initialDate)}>
      <View>
        <TextInput
          editable={false}
          value={value}
          label={label}
          right={right}
          mode={mode}
          style={style}
        />
      </View>
    </Pressable>
  );
};

export default DateTimeTextInput;