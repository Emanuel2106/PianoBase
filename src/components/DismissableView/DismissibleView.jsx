import { Keyboard, Pressable } from "react-native";

const DismissibleView = ({children}) => {
  return (
    <Pressable style={{flex:1}} onPress={Keyboard.dismiss}>
      {children}
    </Pressable>
  );
};

export default DismissibleView;