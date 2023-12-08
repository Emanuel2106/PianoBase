import { View } from "react-native";

import { styles } from "./styles";
import { homeMenu } from "../../config/data";
import { Appbar, Center, Scaffold } from "../../components";
import { MenuTile } from "./components";

const HomeScreen = ({navigation}) => {
  return (
    <Scaffold
      appbar={<Appbar title="Inicio" />}
      body={HomeBody({navigation})}
    />
  );
};

const HomeBody = ({navigation}) => {
  return (
    <Center>
      <View style={[styles.menu, styles.shadow]}>
        {
          homeMenu.map((item, index) => {
            return <MenuTile 
              key={item.title}
              item={item} 
              index={index}
              onPress={() => navigation.push(item.route)}   
            />;
          })
        }
      </View>
    </Center>
  );
};

export default HomeScreen;