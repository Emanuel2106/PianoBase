import { View } from "react-native";
import { Appbar, Text, useTheme } from "react-native-paper";

const SettingsScreen = ({navigation}) => {
  const { colors } = useTheme();

  return (
    <View style={{flex:1}}>
      <Appbar.Header style={{backgroundColor: colors.primary}}>
        <Appbar.BackAction color="#fff" onPress={() => navigation.pop()} />
        <Appbar.Content color="#fff" title="Ajustes" />
      </Appbar.Header>

      <View style={{flex:1, justifyContent: "center", alignItems: "center"}}>
        <Text>
          Ajusts
        </Text>
      </View>
    </View>
  );
};

export default SettingsScreen;