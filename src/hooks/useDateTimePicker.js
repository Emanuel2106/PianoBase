import { useState } from "react";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";

export const useDateTimePicker = () => {
  const [pickedDate, setPickedDate] = useState();

  const onDateSelected = (_, selectedDate) => {
    setPickedDate(selectedDate);
  };

  const showCalendar = (initialDate) => {
    DateTimePickerAndroid.open({
      value: pickedDate ?? initialDate ?? new Date(),
      onChange: onDateSelected,
      mode: "date",
      is24Hour: true,
    });
  };

  return { pickedDate, showCalendar };
};