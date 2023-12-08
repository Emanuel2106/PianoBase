import { useNavigation } from "@react-navigation/native";
import { Appbar as MAppBar, useTheme } from "react-native-paper";

const Appbar = ({title, back, actions = []}) => {
  const navigation = useNavigation();

  const { colors } = useTheme();

  return (
    <MAppBar.Header 
      theme={{
        colors: {
          onSurface: "#fff", 
          surface: colors.primary,
        },
      }}
    >
      { back &&  <MAppBar.BackAction  onPress={() => navigation.goBack()} />}
      
      <MAppBar.Content title={title} />
      
      {
        actions.map((item) => {
          return <MAppBar.Action icon={item.icon} onPress={item.onPress} />;
        })
      }
    </MAppBar.Header>
  );
};

export default Appbar;