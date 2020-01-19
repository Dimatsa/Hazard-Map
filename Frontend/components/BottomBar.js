import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import React from "react";
import { StyleSheet, View } from "react-native";

export default BottomBar = () => 
(
<View style={style.container}><Button
  buttonStyle={style.button}
  titleStyle={style.title}
  title="Solid Button"
/></View>)

const style = StyleSheet.create({
  container: {
    alignItems: "center"
  },
  title: {
    alignItems: "center"
  },
  button: {
    flexGrow: 0,
    width: "50%",
  }
})
