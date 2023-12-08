/* eslint-disable react/no-unstable-nested-components */
import { View } from "react-native";
import { useTheme, Text, List } from "react-native-paper";
import { CommonActions } from "@react-navigation/native";

import { AvatarPicker } from "./components";
import { styles } from "./styles";
import { useSessionStore } from "../../config/store";
import { fonts } from "../../config/theme/typography";
import { Appbar, Center, Scaffold } from "../../components";
import { profileMenu } from "../../config/data";
import { Shadow } from "react-native-shadow-2";

const ProfileScreen = ({ navigation }) => {
  return (
    <Scaffold
      appbar={<Appbar title="Ajustes" back />}
      body={ProfileBody({navigation})}
    />
  );
};

const ProfileBody = ({navigation}) => {
  const user = useSessionStore((state) => state.user);
  const endSession = useSessionStore((state) => state.endSession);

  const { colors } = useTheme();

  const navigate = (route) => {
    if(route) {
      navigation.push(route);
    } else {
      endSession();
      navigation.dispatch(CommonActions.reset({
        index: 0,
        routes: [{name: "Login"}],
      }));
    }
  };

  const nameOrEmail = () => {
    return user.firstName ? `${user.firstName} ${user.lastName}` : user.email;
  };

  return (
    <Center>
      {/* Avatar & Name */}
      <View style={{alignItems: "center"}}>
        <AvatarPicker
          userAvatar={user?.avatar}
          text={nameOrEmail()}
          size={120}
          backgroundColor={colors.primary}
        />

        <View style={{height: 10.0}} />

        { user.firstName &&
          <Text variant="textMedium" style={styles.name} >
            {user.firstName} {user.lastName}
          </Text>
        }

        <Text variant="labelSmall" style={styles.email} >
          {user.email}
        </Text>
      </View>

      <View style={{height: 20.0}} />

      {/* Menu*/}
      <Shadow
        containerStyle={{width: "80%"}}
        style={styles.card}
        distance={4}
      >
        <Text variant="titleLarge" style={styles.name} > Cuenta </Text>
        {
          profileMenu.map((item) => {
            return <List.Item
              
              key={item.title}
              title={item.title}
              titleStyle={fonts.bodyLarge}
              onPress={() => navigate(item.route)}
              left={props => <List.Icon {...props} icon={item.icon} />}
            />;
          })
        }
      </Shadow>
    </Center>
  );
};

export default ProfileScreen;