import { StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const StaffIcon = ({size}) => {
  return (
    <Icon
      name="music-clef-treble" 
      color={"#1e1e1e"}
      size={size}
      style={[styles.backIcon, {width: size}]}
    />
  );
};

const styles = StyleSheet.create({
  backIcon: {
    aspectRatio:1,
    transform: [{translateY: -5}],
  },
});

export default StaffIcon;