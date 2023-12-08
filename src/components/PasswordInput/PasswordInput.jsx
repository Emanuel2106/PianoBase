import { useState } from "react";
import { TextInput } from "react-native-paper";

const PasswordInput = ({onChangeText, label, value, maxLength, mode, style, error}) => {
  const [show, setShow] = useState(false);

  return (
    <TextInput
      label={label}
      value={value}
      maxLength={maxLength}
      secureTextEntry={!show}
      onChangeText={(password) => onChangeText(password)}
      error={error}
      mode={mode}
      style={style}
      right={<TextInput.Icon 
        onPress={() => setShow(!show)}
        icon={show ? "eye-off-outline" : "eye-outline"}
      />}
    />
  );
};

export default PasswordInput;