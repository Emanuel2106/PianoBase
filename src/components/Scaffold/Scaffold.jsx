import { View, StyleSheet } from "react-native";

const Scaffold = ({appbar, body, center}) => {

  return (
    <View style={{flex:1}}>
      {appbar ?? <></>}
    
      <View 
        style={{
          flex: 1, 
          ...(center && styles.center),
        }}
      >
        {body}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    justifyContent: "center", 
    alignItems: "center",
  },
});

export default Scaffold;