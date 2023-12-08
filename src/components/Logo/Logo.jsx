import { Image, StyleSheet } from "react-native";

import { Assets } from "../../config/constants/assets";

const Logo = () => {
  return (
    <Image
      style={styles.logo}
      source={Assets.logo}/>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 150,
    height: 150,
    borderRadius: 15,
  },
});

export default Logo;