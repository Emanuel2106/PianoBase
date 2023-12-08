import { View } from "react-native";
import { OrientationLocker, PORTRAIT } from "react-native-orientation-locker";

import { Assets } from "../../config/constants/assets";
import { Appbar, Scaffold } from "../../components";
import { PianoModeCard } from "./components";
import { styles } from "./styles";

const PianoModeScreen = ({navigation}) => {
  return (
    <Scaffold
      appbar={<Appbar title="Selecciona" back />}
      body={
        <>
          {PianoModeBody({navigation})}
          <OrientationLocker orientation={PORTRAIT} />
        </>
      }
    />
  );
};

const PianoModeBody = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <View style={styles.center}>
        <PianoModeCard
          onPress={() => navigation.push("TabNavigator")}
          background={Assets.practiceBackground}
          text="Practica"
        />
      </View>
      <View style={styles.center}>
        <PianoModeCard
          onPress={() => navigation.push("Play")}
          background={Assets.playBackground}
          text="Creativo"
        />
      </View>
    </View>
  );
};

export default PianoModeScreen;